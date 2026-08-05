import React from 'react';

export interface LanIntersectionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanIntersection(props: LanIntersectionProps): React.ReactElement;
export default LanIntersection;
