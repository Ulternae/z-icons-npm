import React from 'react';

export interface LanPianoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPianoSolid(props: LanPianoSolidProps): React.ReactElement;
export default LanPianoSolid;
