import React from 'react';

export interface MinaDangerSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDangerSquareSolid(props: MinaDangerSquareSolidProps): React.ReactElement;
export default MinaDangerSquareSolid;
