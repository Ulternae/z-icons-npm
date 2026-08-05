import React from 'react';

export interface LanPersonCirclePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonCirclePlus(props: LanPersonCirclePlusProps): React.ReactElement;
export default LanPersonCirclePlus;
