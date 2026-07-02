import React from 'react';

export interface CoreCircleHalfStrokeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCircleHalfStrokeSolid(props: CoreCircleHalfStrokeSolidProps): React.ReactElement;
export default CoreCircleHalfStrokeSolid;
