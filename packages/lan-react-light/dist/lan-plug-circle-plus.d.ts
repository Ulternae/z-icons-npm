import React from 'react';

export interface LanPlugCirclePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlugCirclePlus(props: LanPlugCirclePlusProps): React.ReactElement;
export default LanPlugCirclePlus;
