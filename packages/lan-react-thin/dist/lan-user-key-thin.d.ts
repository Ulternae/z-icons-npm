import React from 'react';

export interface LanUserKeyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserKeyThin(props: LanUserKeyThinProps): React.ReactElement;
export default LanUserKeyThin;
