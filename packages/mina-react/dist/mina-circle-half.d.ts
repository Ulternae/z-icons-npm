import React from 'react';

export interface MinaCircleHalfProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCircleHalf(props: MinaCircleHalfProps): React.ReactElement;
export default MinaCircleHalf;
