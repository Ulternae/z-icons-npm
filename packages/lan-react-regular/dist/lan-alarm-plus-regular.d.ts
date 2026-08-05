import React from 'react';

export interface LanAlarmPlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlarmPlusRegular(props: LanAlarmPlusRegularProps): React.ReactElement;
export default LanAlarmPlusRegular;
