import React from 'react';

export interface MinaAlarmXProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAlarmX(props: MinaAlarmXProps): React.ReactElement;
export default MinaAlarmX;
