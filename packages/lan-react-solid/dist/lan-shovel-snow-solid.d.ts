import React from 'react';

export interface LanShovelSnowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShovelSnowSolid(props: LanShovelSnowSolidProps): React.ReactElement;
export default LanShovelSnowSolid;
