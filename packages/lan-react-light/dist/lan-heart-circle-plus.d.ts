import React from 'react';

export interface LanHeartCirclePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeartCirclePlus(props: LanHeartCirclePlusProps): React.ReactElement;
export default LanHeartCirclePlus;
