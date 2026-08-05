import React from 'react';

export interface MinaAlarmCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAlarmCheckSolid(props: MinaAlarmCheckSolidProps): React.ReactElement;
export default MinaAlarmCheckSolid;
