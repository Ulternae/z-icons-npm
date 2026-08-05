import React from 'react';

export interface LanCowbellCirclePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCowbellCirclePlus(props: LanCowbellCirclePlusProps): React.ReactElement;
export default LanCowbellCirclePlus;
