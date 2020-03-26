module.exports = {
  succeed,
  fail,
  repair
};

function succeed(item) {
  validateItem(item);
  let { name, enhancement, durability } = item;
  if (enhancement < 20) {
    enhancement++;
  }
  return { name, enhancement, durability };
}

function fail(item) {
  validateItem(item);
  let { name, enhancement, durability } = item;
  if (enhancement > 16) {
    enhancement = enhancement - 1;
  }
  if (enhancement > 15) {
    durability = durability - 10;
  } else {
    durability = durability - 5;
  }
  return { name, enhancement, durability };
}

function repair(item) {
  validateItem(item);
  let { durability } = item;
  durability = 100;
  return { ...item, durability };
}

function validateItem(item) {
  if (!item.name || item.name === "") {
    throw new Error("Must give item name");
  } else if (
    typeof item.durability !== "number" ||
    item.durability < 0 ||
    item.durability > 100
  ) {
    throw new Error("Must have item number 0-100 for durability");
  } else if (
    typeof item.enhancement !== "number" ||
    item.enhancement < 0 ||
    item.enhancement > 20
  ) {
    throw new Error("Must have enhancement number 0-20 for enhancement.");
  }
}
