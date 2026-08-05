import React from 'react';

export interface LanShovelSnowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShovelSnow(props: LanShovelSnowProps): React.ReactElement;
export default LanShovelSnow;
