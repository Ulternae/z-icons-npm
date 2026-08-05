import React from 'react';

export interface LanCircleStopSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleStopSolid(props: LanCircleStopSolidProps): React.ReactElement;
export default LanCircleStopSolid;
