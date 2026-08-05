import React from 'react';

export interface Lan2SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function Lan2Solid(props: Lan2SolidProps): React.ReactElement;
export default Lan2Solid;
