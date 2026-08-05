import React from 'react';

export interface LanPianoKeyboardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPianoKeyboardThin(props: LanPianoKeyboardThinProps): React.ReactElement;
export default LanPianoKeyboardThin;
