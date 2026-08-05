import React from 'react';

export interface LanUserDashedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserDashedThin(props: LanUserDashedThinProps): React.ReactElement;
export default LanUserDashedThin;
