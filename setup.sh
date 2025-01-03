#!/bin/bash

# Get OS type
OS="$(uname -s)"

# Check OS and install accordingly
case "${OS}" in
    Darwin*)
        echo "Installing merod for macOS..."
        brew tap calimero-network/homebrew-tap
        brew install merod
        ;;
    Linux*)
        echo "Installing merod for Linux..."
        curl -sSf https://raw.githubusercontent.com/calimero-network/core/master/scripts/install-merod.sh | bash
        ;;
    *)
        echo "Unsupported operating system: ${OS}"
        exit 1
        ;;
esac

# Verify installation
echo "Verifying merod installation..."
merod --version

# Initialize node
echo "Initializing node..."
merod --node-name hellodecknode init --server-port 2428 --swarm-port 2528 --protocol starknet

# Run the node
echo "Starting the node..."
merod --node-name hellodecknode run

echo "Setup completed successfully!"
