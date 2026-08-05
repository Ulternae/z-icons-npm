import React from 'react';

export interface LanMobileNotchThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMobileNotchThin(props: LanMobileNotchThinProps): React.ReactElement;
export default LanMobileNotchThin;
