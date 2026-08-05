import React from 'react';

export interface LanHeartRateProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeartRate(props: LanHeartRateProps): React.ReactElement;
export default LanHeartRate;
