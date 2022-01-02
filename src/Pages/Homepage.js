import React from "react";
import Banner from "../Components/Homepage/Banner";
import Button from "../Components/Button";

import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <>
      <section className="homepage">
        <Banner>
          <Link to="/starttest">
            <Button type={`PROCEED`} />
          </Link>
        </Banner>
      </section>
    </>
  );
}
