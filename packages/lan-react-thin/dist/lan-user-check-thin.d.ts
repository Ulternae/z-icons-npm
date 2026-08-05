import React from 'react';

export interface LanUserCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserCheckThin(props: LanUserCheckThinProps): React.ReactElement;
export default LanUserCheckThin;
