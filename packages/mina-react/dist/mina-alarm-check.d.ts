import React from 'react';

export interface MinaAlarmCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAlarmCheck(props: MinaAlarmCheckProps): React.ReactElement;
export default MinaAlarmCheck;
