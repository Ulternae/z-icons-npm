import React from 'react';

export interface LanRocketProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRocket(props: LanRocketProps): React.ReactElement;
export default LanRocket;
