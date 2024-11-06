import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import React from "react";
import { Button } from "./ui/button";

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="flex justify-between items-center shadow-sm p-5">
      <div className="flex items-center gap-2 font-extrabold">
        <img src="logo.svg" width={40} height={50} />
        <h2 className="font-great-vibes">Madinga</h2>
      </div>
      <ul className="hidden md:flex gap-16">
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
          Home
        </li>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
          Search
        </li>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
          Cars
        </li>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
          Contacts
        </li>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
          About Us
        </li>
      </ul>

      {isSignedIn ? (
        <div className="flex items-center gap-5">
          <UserButton />
          <Button>Submit Listing</Button>
        </div>
      ) : (
        <Button>Submit Listing</Button>
      )}
    </div>
  );
}

export default Header;
