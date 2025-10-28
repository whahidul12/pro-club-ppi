import React from "react";

const Accordion = () => {
  return (
    <section className="mx-8 py-10 md:mx-12 md:pb-20">
      <h2 className="text-text-primary mb-8 text-center text-3xl md:mb-16 md:text-5xl">
        Frequently Asked Questions
      </h2>
      <div className="mx-auto max-w-5xl">
        <div className="collapse-plus bg-brand/50 text-text-primary collapse mb-2 border-2">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title">
            <h3 className="text-text-primary text-lg font-semibold md:text-xl">
              How can I join this Club?
            </h3>
          </div>
          <div className="collapse-content text-sm md:text-base">
            Click the "Sign Up" button in the top right corner and follow the
            registration process.
          </div>
        </div>
        <div className="collapse-plus bg-brand/50 text-text-primary collapse mb-2 border-2">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title">
            <h3 className="text-text-primary text-lg font-semibold md:text-xl">
              Where This club is located?
            </h3>
          </div>
          <div className="collapse-content text-sm md:text-base">
            Click on "Forgot Password" on the login page and follow the
            instructions sent to your email.
          </div>
        </div>
        <div className="collapse-plus bg-brand/50 text-text-primary collapse mb-2 border-2">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title">
            <h3 className="text-text-primary text-lg font-semibold md:text-xl">
              How can I join this Club?
            </h3>
          </div>
          <div className="collapse-content text-sm md:text-base">
            Go to "My Account" settings and select "Edit Profile" to make
            changes.
          </div>
        </div>
        <div className="collapse-plus bg-brand/50 text-text-primary collapse mb-2 border-2">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title">
            <h3 className="text-text-primary text-lg font-semibold md:text-xl">
              How can I join this Club?
            </h3>
          </div>
          <div className="collapse-content text-sm md:text-base">
            Go to "My Account" settings and select "Edit Profile" to make
            changes.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accordion;
