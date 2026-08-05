import React from 'react';

export interface MinaCogOneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCogOneSolid(props: MinaCogOneSolidProps): React.ReactElement;
export default MinaCogOneSolid;
