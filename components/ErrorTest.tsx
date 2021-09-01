export default function ErrorExample() {
  const nextTest = () => {
    console.log("on！！");
    // throw new Error();
  };

  const onRegistrationToDo = () => {
    try {
      nextTest();
      throw new Error();
    } catch (error) {
      throw error;
      // console.log("error", error);
      //   throw error.code;
    }
  };

  return (
    <div>
      <button onClick={onRegistrationToDo}>エラーボタン！！</button>
    </div>
  );
}
