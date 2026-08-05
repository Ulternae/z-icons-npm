import React from 'react';

export interface LanMeatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMeat(props: LanMeatProps): React.ReactElement;
export default LanMeat;
