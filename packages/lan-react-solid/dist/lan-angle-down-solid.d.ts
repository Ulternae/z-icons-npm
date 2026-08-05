import React from 'react';

export interface LanAngleDownSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAngleDownSolid(props: LanAngleDownSolidProps): React.ReactElement;
export default LanAngleDownSolid;
