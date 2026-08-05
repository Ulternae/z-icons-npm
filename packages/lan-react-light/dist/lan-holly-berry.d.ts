import React from 'react';

export interface LanHollyBerryProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHollyBerry(props: LanHollyBerryProps): React.ReactElement;
export default LanHollyBerry;
