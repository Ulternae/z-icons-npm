import React from 'react';

export interface MinaCogThreeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCogThreeSolid(props: MinaCogThreeSolidProps): React.ReactElement;
export default MinaCogThreeSolid;
