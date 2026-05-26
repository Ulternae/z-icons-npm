import React from 'react';

export interface LanHighlighterLineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHighlighterLineThin: React.FC<LanHighlighterLineThinProps>;
export default LanHighlighterLineThin;
