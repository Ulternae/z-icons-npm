import React from 'react';

export interface LanPianoKeyboardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPianoKeyboard: React.FC<LanPianoKeyboardProps>;
export default LanPianoKeyboard;
