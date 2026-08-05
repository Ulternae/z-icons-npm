import React from 'react';

export interface LanAlarmSnoozeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlarmSnoozeRegular(props: LanAlarmSnoozeRegularProps): React.ReactElement;
export default LanAlarmSnoozeRegular;
