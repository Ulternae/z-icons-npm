import React from 'react';

export interface MinaCableCarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCableCar(props: MinaCableCarProps): React.ReactElement;
export default MinaCableCar;
