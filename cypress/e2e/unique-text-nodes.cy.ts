describe('Unique Text Node Test', () => {
  beforeEach(() => {
    cy.visit('/');

    // Ensure the component is in the state where the text node is visible
    cy.contains('button', 'reset').click();

    cy.get('body *').each(($el) => {
      const el = $el[0];
      const childNodes = Array.from(el.childNodes);

      const hasTextNode = childNodes.some(
        (node) =>
          node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '',
      );

      if (hasTextNode) {
        const meaningfulChildren = childNodes.filter((node) => {
          // Meaningful nodes are element nodes or non-empty text nodes
          return (
            node.nodeType === Node.ELEMENT_NODE ||
            (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '')
          );
        });

        // If an element has a text node, it should be the ONLY meaningful child.
        expect(meaningfulChildren.length).to.equal(
          1,
          `Element <${el.tagName.toLowerCase()}> has a text node but also has other children. HTML: ${el.outerHTML}`,
        );
      }
    });
  });

  it('should pass this test', () => {
    // This is a placeholder test to ensure beforeEach hook runs.
    expect(true).to.equal(true);
  });
});
