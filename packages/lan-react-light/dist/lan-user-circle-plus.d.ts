import React from 'react';

export interface LanUserCirclePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserCirclePlus(props: LanUserCirclePlusProps): React.ReactElement;
export default LanUserCirclePlus;
