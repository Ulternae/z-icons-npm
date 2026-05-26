import React from 'react';

export interface LanHighlighterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHighlighterThin: React.FC<LanHighlighterThinProps>;
export default LanHighlighterThin;
