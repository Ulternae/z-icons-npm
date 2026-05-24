import React from 'react';

export interface BruMarkdownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruMarkdown: React.FC<BruMarkdownProps>;
export default BruMarkdown;
