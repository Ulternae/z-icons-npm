import React from 'react';

export interface MinaAlarmSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAlarmSolid(props: MinaAlarmSolidProps): React.ReactElement;
export default MinaAlarmSolid;
