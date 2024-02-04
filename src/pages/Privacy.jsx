const Privacy = () => {
  return (
    <div className="text-white flex items-center justify-center flex-col gap-5 h-screen mx-auto max-w-xl p-4">
      <h2 className="text-5xl font-bold mt-5 mb-10">Privacy Policy</h2>

      <p className="text-center">
        None of the data utilized by Nutritify is stored or collected anywhere.
        Your information is NOT shared with any third parties. It is employed
        exclusively for the purpose of displaying your Nutrition Fact Table
        within the application.
      </p>

      <p className="text-center mb-2">
        If, at any point, you wish to revoke Nutritify's access to your data,
        you can easily do so by visiting your{" "}
        <a
          className="underline font-bold italic"
          href="https://www.spotify.com/id-id/account/apps"
          target="blank"
        >
          app page
        </a>{" "}
        and click "REMOVE ACCESS" on Nutritify.
      </p>
      <a className="mt-10 underline" href="/">
        back
      </a>
    </div>
  );
};

export default Privacy;
