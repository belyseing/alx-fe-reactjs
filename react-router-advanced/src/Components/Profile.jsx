import React from "react";

function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}

export default Profile;
