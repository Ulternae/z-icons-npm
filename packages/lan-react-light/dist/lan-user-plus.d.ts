import React from 'react';

export interface LanUserPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserPlus(props: LanUserPlusProps): React.ReactElement;
export default LanUserPlus;
