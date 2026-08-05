import React from 'react';

export interface LanShovelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShovel(props: LanShovelProps): React.ReactElement;
export default LanShovel;
