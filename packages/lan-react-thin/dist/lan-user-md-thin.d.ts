import React from 'react';

export interface LanUserMdThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserMdThin(props: LanUserMdThinProps): React.ReactElement;
export default LanUserMdThin;
