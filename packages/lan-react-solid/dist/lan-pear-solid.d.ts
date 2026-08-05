import React from 'react';

export interface LanPearSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPearSolid(props: LanPearSolidProps): React.ReactElement;
export default LanPearSolid;
