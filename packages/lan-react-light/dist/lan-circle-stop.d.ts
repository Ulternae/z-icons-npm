import React from 'react';

export interface LanCircleStopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleStop(props: LanCircleStopProps): React.ReactElement;
export default LanCircleStop;
