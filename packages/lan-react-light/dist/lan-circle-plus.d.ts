import React from 'react';

export interface LanCirclePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCirclePlus(props: LanCirclePlusProps): React.ReactElement;
export default LanCirclePlus;
