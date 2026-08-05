import React from 'react';

export interface LanUserTimesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserTimes(props: LanUserTimesProps): React.ReactElement;
export default LanUserTimes;
