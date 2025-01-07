pragma solidity ^0.8.0;

contract VendorRegistry {
    struct Vendor {
        uint id;
        string name;
        address wallet;
    }

    mapping(uint => Vendor) public vendors;

    function registerVendor(uint _id, string memory _name, address _wallet) public {
        vendors[_id] = Vendor(_id, _name, _wallet);
    }
}
