import React from 'react';

export interface LanUserVneckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserVneckThin(props: LanUserVneckThinProps): React.ReactElement;
export default LanUserVneckThin;
