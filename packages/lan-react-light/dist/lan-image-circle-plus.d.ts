import React from 'react';

export interface LanImageCirclePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImageCirclePlus(props: LanImageCirclePlusProps): React.ReactElement;
export default LanImageCirclePlus;
