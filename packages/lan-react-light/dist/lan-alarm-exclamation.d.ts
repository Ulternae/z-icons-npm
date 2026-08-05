import React from 'react';

export interface LanAlarmExclamationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlarmExclamation(props: LanAlarmExclamationProps): React.ReactElement;
export default LanAlarmExclamation;
