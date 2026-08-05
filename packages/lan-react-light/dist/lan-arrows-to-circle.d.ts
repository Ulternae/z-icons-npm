import React from 'react';

export interface LanArrowsToCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowsToCircle(props: LanArrowsToCircleProps): React.ReactElement;
export default LanArrowsToCircle;
