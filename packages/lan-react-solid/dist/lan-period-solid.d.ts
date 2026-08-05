import React from 'react';

export interface LanPeriodSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeriodSolid(props: LanPeriodSolidProps): React.ReactElement;
export default LanPeriodSolid;
