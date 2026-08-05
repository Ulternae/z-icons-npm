import React from 'react';

export interface LanMobileRetroThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMobileRetroThin(props: LanMobileRetroThinProps): React.ReactElement;
export default LanMobileRetroThin;
