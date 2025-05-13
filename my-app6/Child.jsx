const _____ = ({ ____________ }) => {
  return (
    <div class="block">
      <div class="field">
        <label class="label"> Enter Message</label>
        <input class="input" type="text" id="msg" placeholder="enter text" />
      </div>
      <div class="control">
        <button
          class="button is-warning"
          onClick={() => ____________(document.______________("msg").value)}
        >
          Change Message
        </button>
      </div>
    </div>
  );
};

export default _____;
