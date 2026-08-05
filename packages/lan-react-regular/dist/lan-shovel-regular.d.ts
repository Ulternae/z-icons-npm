import React from 'react';

export interface LanShovelRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShovelRegular(props: LanShovelRegularProps): React.ReactElement;
export default LanShovelRegular;
