"use client";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-primary text-secondary flex flex-col items-center">
      {/* Page Header */}
      <h1 className="text-4xl font-bold text-light mt-8 mb-4">My Resume</h1>

      {/* Download Button */}
        <a
        href="/Carter_Esparza.pdf"
        download
        className="inline-block px-6 py-3 bg-secondary text-dark font-bold rounded-lg shadow-md hover:bg-light hover:text-dark focus:outline-none focus:ring-2 focus:ring-secondary mb-8"
        >
        Download Resume
        </a>

      {/* Visualized Resume */}
      {/* <div className="w-full max-w-4xl bg-dark p-6 sm:p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-light mb-4">Summary</h2>
        <p className="text-secondary mb-6">
          Highly motivated Data Analyst with a proven track record in data
          visualization, SQL, Python, and Power BI. Passionate about turning
          data into actionable insights to drive business decisions.
        </p>

        <h2 className="text-2xl font-bold text-light mb-4">Skills</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-secondary mb-6">
          <li>SQL</li>
          <li>Python</li>
          <li>Power BI</li>
          <li>Excel</li>
          <li>Tableau</li>
          <li>GraphQL</li>
        </ul>

        <h2 className="text-2xl font-bold text-light mb-4">Experience</h2>
        <ul className="space-y-4 text-secondary mb-6">
          <li>
            <span className="text-light font-bold">Implementation Specialist</span> - Los Angeles
            Apparel (2020 - Present)
            <ul className="ml-4 list-disc mt-1">
              <li>
                Managed over 1M+ orders and 3.1M products, optimizing server
                performance for the Yeezy program.
              </li>
              <li>
                Enhanced data accuracy and streamlined workflows using SQL and
                Power BI.
              </li>
            </ul>
          </li>
          <li>
            <span className="text-light font-bold">Data Analyst Intern</span> - ABC Corp (2018 - 2020)
            <ul className="ml-4 list-disc mt-1">
              <li>
                Designed dashboards that reduced reporting time by 40%.
              </li>
              <li>
                Automated data pipelines, saving 20 hours per week.
              </li>
            </ul>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-light mb-4">Education</h2>
        <p className="text-secondary">
          Bachelor of Science in Computer Science, XYZ University, 2020
        </p>
      </div> */}
    </div>
  );
}
