import React from 'react';

export interface LanPiSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPiSolid(props: LanPiSolidProps): React.ReactElement;
export default LanPiSolid;
