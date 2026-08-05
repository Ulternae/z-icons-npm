import React from 'react';

export interface LanHundredPointsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHundredPoints(props: LanHundredPointsProps): React.ReactElement;
export default LanHundredPoints;
