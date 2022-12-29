#!/bin/bash
# Author: Mandar Devarshi
# Github: @MandarDevarshi
# CreatedDate: Thu 29 Dec 14:59:57 IST 2022
# Purpose: Helper Script

# Create a new tmux session
tmux new-session -d -s mysession

# Split the window into two panes
tmux split-window -h

# Run the desired commands in each pane
tmux send-keys -t 0 'mdcat README.md' Enter
tmux send-keys -t 1 'bash bar' Enter
