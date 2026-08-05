import React from 'react';

export interface LanGuitarElectricProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGuitarElectric(props: LanGuitarElectricProps): React.ReactElement;
export default LanGuitarElectric;
