const permission = {
  inserted(el, binding) {
    const permissions = ["create", "edit", "view"];
    const value = binding.value;
    if (!permissions.includes(value)) {
      el.parentNode?.removeChild(el);
    }
  },
};

export default permission;
