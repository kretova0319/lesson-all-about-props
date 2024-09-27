function Profile({ title, image, name, surname, age }) {
  return (
    <div>
      <h2>{title}</h2>
      <img src={image} alt="avatar" width="300px" max-height="200px" />
      <p>{name}</p>
      <p>{surname}</p>
      <p>{age}</p>
    </div>
  );
}

export default Profile;
