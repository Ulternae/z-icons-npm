import React from 'react';

export interface LanGuitarElectricRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGuitarElectricRegular(props: LanGuitarElectricRegularProps): React.ReactElement;
export default LanGuitarElectricRegular;
