import React from 'react';

export interface LanCableCarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCableCar(props: LanCableCarProps): React.ReactElement;
export default LanCableCar;
