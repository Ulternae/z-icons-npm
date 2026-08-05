import React from 'react';

export interface LanGuitarElectricThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGuitarElectricThin(props: LanGuitarElectricThinProps): React.ReactElement;
export default LanGuitarElectricThin;
