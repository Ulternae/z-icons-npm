import React from 'react';

export interface LanHandHoldingStarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandHoldingStar(props: LanHandHoldingStarProps): React.ReactElement;
export default LanHandHoldingStar;
