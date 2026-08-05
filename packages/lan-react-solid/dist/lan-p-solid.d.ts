import React from 'react';

export interface LanPSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPSolid(props: LanPSolidProps): React.ReactElement;
export default LanPSolid;
