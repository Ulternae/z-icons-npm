import React from 'react';

export interface MinaDotsVerticalCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDotsVerticalCircle(props: MinaDotsVerticalCircleProps): React.ReactElement;
export default MinaDotsVerticalCircle;
