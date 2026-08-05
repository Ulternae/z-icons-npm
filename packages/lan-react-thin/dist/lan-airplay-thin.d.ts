import React from 'react';

export interface LanAirplayThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAirplayThin(props: LanAirplayThinProps): React.ReactElement;
export default LanAirplayThin;
