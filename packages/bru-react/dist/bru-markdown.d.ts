import React from 'react';

export interface BruMarkdownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruMarkdown(props: BruMarkdownProps): React.ReactElement;
export default BruMarkdown;
