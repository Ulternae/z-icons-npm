import React from 'react';

export interface LanPieSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPieSolid(props: LanPieSolidProps): React.ReactElement;
export default LanPieSolid;
