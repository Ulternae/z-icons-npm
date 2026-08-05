import React from 'react';

export interface LanCarsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCars(props: LanCarsProps): React.ReactElement;
export default LanCars;
