import { toaster } from "./toaster";

export function loading(description) {
  toaster.create({
    type: "loading",
    description: description,
  });
}

export function success(title, description) {
  toaster.create({
    type: "success",
    title: title,
    description: description,
  });
}

export function error(title, description) {
  toaster.create({
    type: "error",
    title: title,
    description: description,
  });
}

export function warning(description) {
  toaster.create({
    type: "warning",
    description: description,
  });
}

export function info(title, description) {
  toaster.create({
    type: "info",
    title: title,
    description: description,
  });
}