const root = document.getRootNode();

let tree = ``;

function traverse(node, depth) {
  if (node.hasChildNodes()) {
    depth += 1;
    let children = node.childNodes;

    for (let i = 0; i < children.length; i++) {
      let childNode = children[i];

      // resource for nodeType: https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
      switch (childNode.nodeType) {
        case 1: // element node
          console.log(childNode);
          let id = "";
          if (childNode.localName === "input") {
            id = ` '${childNode.id}'`;
          }
          tree += `${"  ".repeat(depth - 1)}${childNode.localName}${id}\n`;
          traverse(childNode, depth);
          break;
        case 3: // text node
          let content = childNode.textContent.replace(/\n|\s/g, "");
          // only care for nodes with visible content
          if (content) {
            tree += `${"  ".repeat(depth - 1)}${
              childNode.nodeName
            } (${childNode.textContent.replace(/\n/g, " ").trim()})\n`;
          }
          break;
        default:
          console.log(`Parsed a different nodeType: ${childNode.nodeType}`);
      }
    }
  }
}

traverse(root, 0);
const newBody = document.createElement("body");
const pre = document.createElement("pre");
pre.innerText = `${tree}`;
newBody.append(pre);

document.body = newBody;
