import React from 'react';

export interface LanShieldTimesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldTimes(props: LanShieldTimesProps): React.ReactElement;
export default LanShieldTimes;
