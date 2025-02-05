import { DeclarationReflection } from 'typedoc';

import { MarkdownPlugin } from '../../plugin';

export function ifDisplaySourceFiles(this: DeclarationReflection, options: any) {
  if (!this.sources || MarkdownPlugin.settings.hideSources) {
    return options.inverse(this);
  }
  return options.fn(this);
}
