import React from 'react';

export interface LanCircleQuarterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleQuarter(props: LanCircleQuarterProps): React.ReactElement;
export default LanCircleQuarter;
