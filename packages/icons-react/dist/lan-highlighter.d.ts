import React from 'react';

export interface LanHighlighterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHighlighter: React.FC<LanHighlighterProps>;
export default LanHighlighter;
