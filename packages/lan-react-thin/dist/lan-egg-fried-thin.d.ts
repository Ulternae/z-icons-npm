import React from 'react';

export interface LanEggFriedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEggFriedThin(props: LanEggFriedThinProps): React.ReactElement;
export default LanEggFriedThin;
