import React from 'react';

export interface MinaHeartSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHeartSquareSolid(props: MinaHeartSquareSolidProps): React.ReactElement;
export default MinaHeartSquareSolid;
