import React from 'react';

export interface LanPianoKeyboardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPianoKeyboardSolid: React.FC<LanPianoKeyboardSolidProps>;
export default LanPianoKeyboardSolid;
