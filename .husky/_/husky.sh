#!/usr/bin/env sh
if [ -z "$husky_skip_init" ]; then
  debug () {
    [ "$HUSKY_DEBUG" = "1" ] && echo "husky (debug) - $1"
  }

  readonly hook_name="$(basename -- "$0")"
  debug "starting $hook_name..."

  if [ "$HUSKY" = "0" ]; then
    debug "Husky disabled via HUSKY=0 env variable"
    exit 0
  fi

  if [ ! -x "$(command -v git)" ]; then
    echo "husky - can't find git, skipping $hook_name hook"
    exit 0
  fi

  export husky_skip_init=1
  sh -e "$0" "$@"
  exitCode="$?"
  unset husky_skip_init
  exit $exitCode
fi
