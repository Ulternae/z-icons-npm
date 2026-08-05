import React from 'react';

export interface LanSwordLaserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSwordLaserSolid(props: LanSwordLaserSolidProps): React.ReactElement;
export default LanSwordLaserSolid;
