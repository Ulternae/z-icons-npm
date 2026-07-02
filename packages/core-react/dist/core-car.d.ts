import React from 'react';

export interface CoreCarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCar(props: CoreCarProps): React.ReactElement;
export default CoreCar;
