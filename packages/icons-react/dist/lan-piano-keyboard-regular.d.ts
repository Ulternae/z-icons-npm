import React from 'react';

export interface LanPianoKeyboardRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPianoKeyboardRegular: React.FC<LanPianoKeyboardRegularProps>;
export default LanPianoKeyboardRegular;
