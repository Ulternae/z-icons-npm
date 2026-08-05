import React from 'react';

export interface LanMobileNotchRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMobileNotchRegular(props: LanMobileNotchRegularProps): React.ReactElement;
export default LanMobileNotchRegular;
