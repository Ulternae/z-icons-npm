import React from 'react';

export interface LanCircleColonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleColon(props: LanCircleColonProps): React.ReactElement;
export default LanCircleColon;
