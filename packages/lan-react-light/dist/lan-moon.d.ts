import React from 'react';

export interface LanMoonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMoon(props: LanMoonProps): React.ReactElement;
export default LanMoon;
