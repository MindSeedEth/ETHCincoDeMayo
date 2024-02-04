 SPDX-License-Identifier MIT

pragma solidity =0.8.2 0.9.0;

contract FileRegistry {
    struct FileData {
        string fileName;
        string ipfsHash;
    }

     store all the papers that a userresearchar has uploaded
    mapping(address = FileData[]) public userFiles;
     the hash of the paper is linked to the wallet which uploaded the file
    mapping(string = address) publisher;
     store the reputation (number of downloads) of files belonging to a wallet
    mapping(address = uint) reputation;

    function uploadFile(string memory fileName, string memory ipfsHash) external {
         after the file is uploaded in the frontend, this is recorded in the blockchain
        userFiles[msg.sender].push(FileData(fileName, ipfsHash));
        publisher[ipfsHash] = msg.sender;
    }

    event Log(string func);

    fallback() external payable {
        emit Log(fallback);
    }

    receive() external payable {
        emit Log(receive);

    }

    function downloadFile(string memory hash) public returns (uint) {
         each time a file linked to a wallet is downloaded, this increases the wallet reputation
        reputation[publisher[hash]]+=1;
        return reputation[publisher[hash]];
    }
}