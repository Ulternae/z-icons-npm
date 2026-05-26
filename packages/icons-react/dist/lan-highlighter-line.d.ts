import React from 'react';

export interface LanHighlighterLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHighlighterLine: React.FC<LanHighlighterLineProps>;
export default LanHighlighterLine;
