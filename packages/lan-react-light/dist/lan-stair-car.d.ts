import React from 'react';

export interface LanStairCarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStairCar(props: LanStairCarProps): React.ReactElement;
export default LanStairCar;
