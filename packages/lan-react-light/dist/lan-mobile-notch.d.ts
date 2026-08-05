import React from 'react';

export interface LanMobileNotchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMobileNotch(props: LanMobileNotchProps): React.ReactElement;
export default LanMobileNotch;
