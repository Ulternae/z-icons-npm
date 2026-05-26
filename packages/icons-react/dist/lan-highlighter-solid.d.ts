import React from 'react';

export interface LanHighlighterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHighlighterSolid: React.FC<LanHighlighterSolidProps>;
export default LanHighlighterSolid;
