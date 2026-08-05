import React from 'react';

export interface LanCircleLocationArrowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleLocationArrow(props: LanCircleLocationArrowProps): React.ReactElement;
export default LanCircleLocationArrow;
