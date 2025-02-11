const validEmail = (email) => {
  if (!email.includes("@")) return false;
  if (email.split("").some((part) => part === "")) return false;

  const parts = email.split("@");
  if (parts.length !== 2) return false;

  const [firstPart, secondPart] = parts;

  if (
    /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?123456789]*$/.test(
      firstPart.split("")[0]
    ) ||
    /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?123456789]*$/.test(
      firstPart.split[firstPart.length]
    ) ||
    firstPart.split("").length < 2
  )
    return false;

  if (!secondPart.includes(".")) return false;
  const secondParts = secondPart.split(".");
  if (
    secondParts[secondParts.length - 1] !== "com" &&
    secondParts[secondParts.length - 1] !== "org" &&
    secondParts[secondParts.length - 1] !== "me"
  )
    return false;
  return true;
};

console.log(validEmail("john@doe.com"));
console.log(validEmail("j@doe.com"));
console.log(validEmail("test@exa@mple.com"));
console.log(validEmail("test@domain"));
console.log(validEmail("jonh@doe.xyz"));
console.log(validEmail("!john@doe.com"));
console.log(validEmail("john!@doe.com"));
console.log(validEmail("john@doe.me"));
