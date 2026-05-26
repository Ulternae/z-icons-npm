import React from 'react';

export interface LanHandPaperSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandPaperSolid: React.FC<LanHandPaperSolidProps>;
export default LanHandPaperSolid;
