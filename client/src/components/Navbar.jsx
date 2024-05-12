import React, { useState } from "react";
import { IconButton } from "rsuite";
import { Search } from "@rsuite/icons";
import ArowBackIcon from "@rsuite/icons/ArowBack";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
} from "@chakra-ui/react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchTerm, setSearchTerm] = useState("");
  const { currentUser } = useSelector((state) => state.user);
  return (
    <header className="header">
      <div className="navbar">
        <Link to="/">
          <h1 className="logoTxt">
            <span className="logo1">Notes</span>
            <span className="logo2">Binder</span>
          </h1>
        </Link>
        <div className="navTabs">
          <IconButton
            className="searchIcon"
            icon={<Search />}
            onClick={onOpen}
          />
          <ul className="navbarList">
            <Link className="Link homeTab" to="/">
              <li>Home</li>
            </Link>
            <Link className="Link aboutTab" to="/explore">
              <li>Explore</li>
            </Link>
            {currentUser ? (
              <Link to="/profile">
                <li>
                  <img
                    className="rounded-full h-10 w-10  object-cover"
                    src={currentUser?.avatar}
                    alt="profile"
                  />
                </li>
              </Link>
            ) : (
              <Link className="Link" to="/profile">
                <li>SignIn</li>
              </Link>
            )}
          </ul>
        </div>
      </div>
      <Modal  isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent m={4}>
            <form className="searchBar">
              <IconButton
                className="hideSearchIcon"
                icon={<ArowBackIcon />}
                onClick={onClose}
              />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </form>
        </ModalContent>
      </Modal>
    </header>
  );
};

export default Navbar;
