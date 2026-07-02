import React from 'react';

export interface CoreHeartHalfSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreHeartHalfSolid(props: CoreHeartHalfSolidProps): React.ReactElement;
export default CoreHeartHalfSolid;
