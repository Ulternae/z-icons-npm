import React from 'react';

export interface LanCirclesOverlapProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCirclesOverlap(props: LanCirclesOverlapProps): React.ReactElement;
export default LanCirclesOverlap;
