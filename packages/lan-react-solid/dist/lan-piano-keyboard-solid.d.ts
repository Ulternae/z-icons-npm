import React from 'react';

export interface LanPianoKeyboardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPianoKeyboardSolid(props: LanPianoKeyboardSolidProps): React.ReactElement;
export default LanPianoKeyboardSolid;
