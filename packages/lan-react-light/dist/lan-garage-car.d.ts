import React from 'react';

export interface LanGarageCarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGarageCar(props: LanGarageCarProps): React.ReactElement;
export default LanGarageCar;
