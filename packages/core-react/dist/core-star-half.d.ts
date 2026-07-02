import React from 'react';

export interface CoreStarHalfProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreStarHalf(props: CoreStarHalfProps): React.ReactElement;
export default CoreStarHalf;
