import React from 'react';

export interface LanPaintRollerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPaintRollerSolid(props: LanPaintRollerSolidProps): React.ReactElement;
export default LanPaintRollerSolid;
