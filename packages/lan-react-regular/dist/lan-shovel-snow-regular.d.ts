import React from 'react';

export interface LanShovelSnowRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShovelSnowRegular(props: LanShovelSnowRegularProps): React.ReactElement;
export default LanShovelSnowRegular;
