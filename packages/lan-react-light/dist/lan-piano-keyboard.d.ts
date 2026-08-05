import React from 'react';

export interface LanPianoKeyboardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPianoKeyboard(props: LanPianoKeyboardProps): React.ReactElement;
export default LanPianoKeyboard;
