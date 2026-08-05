import React from 'react';

export interface LanEggFriedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEggFried(props: LanEggFriedProps): React.ReactElement;
export default LanEggFried;
