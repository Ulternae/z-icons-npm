import React from 'react';

export interface LanPianoKeyboardRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPianoKeyboardRegular(props: LanPianoKeyboardRegularProps): React.ReactElement;
export default LanPianoKeyboardRegular;
