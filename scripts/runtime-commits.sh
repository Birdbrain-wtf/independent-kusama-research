#!/bin/bash
# Counts commits to polkadot-fellows/runtimes by whether they touch Kusama paths.
# Usage: runtime-commits.sh <path to a clone of the repo> [since, default 2025-11-05]
# A commit is not a measure of effort. Encointer counts as Kusama. Changelogs, lockfiles, docs and CI count as neither.
cd "$1" || exit 1
since="${2:-2025-11-05}"
only=0; both=0; none=0; meta=0
declare -A authors
for c in $(git log --since="$since" --no-merges --format=%h); do
  files=$(git diff-tree --no-commit-id --name-only -r "$c" | grep -vE '^(CHANGELOG|Cargo\.lock|Cargo\.toml|\.github|docs/)')
  if [ -z "$files" ]; then meta=$((meta+1)); continue; fi
  has_kusama=0; echo "$files" | grep -qiE 'kusama|encointer' && has_kusama=1
  has_other=0; echo "$files" | grep -viE 'kusama|encointer' | grep -q . && has_other=1
  if [ $has_kusama = 1 ] && [ $has_other = 0 ]; then
    only=$((only+1)); a=$(git log -1 --format=%an "$c")
    case "$a" in *bot*) ;; *) authors["$a"]=1 ;; esac
  elif [ $has_kusama = 1 ]; then both=$((both+1))
  else none=$((none+1)); fi
done
printf '{"since":"%s","kusama_only":%d,"kusama_and_other":%d,"no_kusama_path":%d,"meta_only":%d,"kusama_only_authors":%d}\n' "$since" "$only" "$both" "$none" "$meta" "${#authors[@]}"
