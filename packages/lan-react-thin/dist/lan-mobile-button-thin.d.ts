import React from 'react';

export interface LanMobileButtonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMobileButtonThin(props: LanMobileButtonThinProps): React.ReactElement;
export default LanMobileButtonThin;
