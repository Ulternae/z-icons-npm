import React from 'react';

export interface LanHighlighterLineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHighlighterLineSolid: React.FC<LanHighlighterLineSolidProps>;
export default LanHighlighterLineSolid;
