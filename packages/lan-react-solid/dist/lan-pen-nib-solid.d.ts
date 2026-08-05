import React from 'react';

export interface LanPenNibSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPenNibSolid(props: LanPenNibSolidProps): React.ReactElement;
export default LanPenNibSolid;
