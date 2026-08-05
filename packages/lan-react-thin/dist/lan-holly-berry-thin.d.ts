import React from 'react';

export interface LanHollyBerryThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHollyBerryThin(props: LanHollyBerryThinProps): React.ReactElement;
export default LanHollyBerryThin;
