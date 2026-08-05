import React from 'react';

export interface LanRaccoonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRaccoon(props: LanRaccoonProps): React.ReactElement;
export default LanRaccoon;
