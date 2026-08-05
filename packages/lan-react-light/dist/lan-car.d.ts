import React from 'react';

export interface LanCarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCar(props: LanCarProps): React.ReactElement;
export default LanCar;
