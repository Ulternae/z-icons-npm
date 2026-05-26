import React from 'react';

export interface LanPianoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPianoSolid: React.FC<LanPianoSolidProps>;
export default LanPianoSolid;
