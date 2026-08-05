import React from 'react';

export interface LanMobileScreenButtonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMobileScreenButtonThin(props: LanMobileScreenButtonThinProps): React.ReactElement;
export default LanMobileScreenButtonThin;
