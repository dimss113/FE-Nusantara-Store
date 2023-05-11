import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Privacy Policy
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Last updated: May 10, 2023
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Information Collection and Use
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <p>
                    We collect several different types of information for
                    various purposes to provide and improve our Service to you.
                  </p>
                  <p>
                    Types of Data Collected
                  </p>
                  <p>
                    Personal Data
                  </p>
                  <p>
                    Usage Data
                  </p>
                  <p>
                    Tracking & Cookies Data
                  </p>
                  <p>
                    Use of Data
                  </p>
                  <p>
                    Ecommerce uses the collected data for various purposes:
                  </p>
                  <p>
                    To provide and maintain the Service
                  </p>
                  <p>
                    To notify you about changes to our Service
                  </p>
                  <p>
                    To allow you to participate in interactive features of our Service
                  </p>
                  <p>
                    To provide customer care and support
                  </p>
                  <p>
                    To provide analysis or valuable information so that we can improve the Service
                  </p>
                </dd>
              </div>

              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Security
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <p>
                    The security of your data is important to us, but remember
                    that no method of transmission over the Internet, or method
                    of electronic storage is 100% secure. While we strive to use
                    commercially acceptable means to protect your Personal Data,
                    we cannot guarantee its absolute security.
                  </p>
                </dd>
              </div>

              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                   </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <p>
                Our Service may contain links to other sites that are not
                operated by us. If you click on a third party link, you will
                be directed to that third party's site. We strongly advise
                you to review the Privacy Policy of every site you visit.
              </p>
              <p>
                We have no control over and assume no responsibility for
                the content, privacy policies or practices of any third
                party sites or services.
              </p>
            </dd>
          </div>

          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Changes to This Privacy Policy
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <p>
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy
                on this page.
              </p>
              <p>
                We will let you know via email and/or a prominent notice on
                our Service, prior to the change becoming effective and
                update the "effective date" at the top of this Privacy
                Policy.
              </p>
              <p>
                You are advised to review this Privacy Policy periodically
                for any changes. Changes to this Privacy Policy are
                effective when they are posted on this page.
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</div>
    </Layout>
  );
};

export default Policy;
