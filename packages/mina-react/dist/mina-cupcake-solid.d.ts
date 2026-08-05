import React from 'react';

export interface MinaCupcakeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCupcakeSolid(props: MinaCupcakeSolidProps): React.ReactElement;
export default MinaCupcakeSolid;
