// Autogenerated by @fig/complete-commander
const completionSpec: Fig.Spec = {
  name: "create-completion-spec",
  description: "Setup fig folder and create spec with the given name",
  subcommands: [
    {
      name: "help",
      description: "Display help for command",
      priority: 49,
      args: { name: "command", isOptional: true },
    },
  ],
  options: [
    {
      name: "--here",
      description: "Set if the spec should be created in the current folder",
    },
    {
      name: ["-h", "--help"],
      description: "Display help for command",
      priority: 49,
    },
  ],
  args: { name: "name" },
};
export default completionSpec;
