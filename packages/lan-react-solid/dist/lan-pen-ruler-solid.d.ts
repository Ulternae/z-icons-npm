import React from 'react';

export interface LanPenRulerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPenRulerSolid(props: LanPenRulerSolidProps): React.ReactElement;
export default LanPenRulerSolid;
