import React from 'react';

export interface MinaAlarmXSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAlarmXSolid(props: MinaAlarmXSolidProps): React.ReactElement;
export default MinaAlarmXSolid;
