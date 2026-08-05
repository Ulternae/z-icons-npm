import React from 'react';

export interface LanFileCirclePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileCirclePlus(props: LanFileCirclePlusProps): React.ReactElement;
export default LanFileCirclePlus;
