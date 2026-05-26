import React from 'react';

export interface LanPianoKeyboardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPianoKeyboardThin: React.FC<LanPianoKeyboardThinProps>;
export default LanPianoKeyboardThin;
