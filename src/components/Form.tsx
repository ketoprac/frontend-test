const Form = (props: any) => {
  const { handleSubmit, searchInputRef } = props;
  return (
    <form
      className="mb-2 flex flex-col gap-2 md:flex-row"
      onSubmit={handleSubmit}
    >
      <input
        className="border p-2 rounded bg-gray-100 w-72 md:w-11/12"
        type="text"
        placeholder="Enter username..."
        ref={searchInputRef}
      />
      <input
        className="border p-2 cursor-pointer rounded text-white bg-sky-600 hover:bg-sky-700"
        type="submit"
        value="Search"
      />
    </form>
  );
};

export default Form;
