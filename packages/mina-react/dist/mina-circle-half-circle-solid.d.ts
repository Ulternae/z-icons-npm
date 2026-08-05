import React from 'react';

export interface MinaCircleHalfCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCircleHalfCircleSolid(props: MinaCircleHalfCircleSolidProps): React.ReactElement;
export default MinaCircleHalfCircleSolid;
