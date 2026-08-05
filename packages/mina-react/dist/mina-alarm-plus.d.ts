import React from 'react';

export interface MinaAlarmPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAlarmPlus(props: MinaAlarmPlusProps): React.ReactElement;
export default MinaAlarmPlus;
