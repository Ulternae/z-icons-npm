import React from 'react';

export interface MinaCoffeeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCoffeeSolid(props: MinaCoffeeSolidProps): React.ReactElement;
export default MinaCoffeeSolid;
