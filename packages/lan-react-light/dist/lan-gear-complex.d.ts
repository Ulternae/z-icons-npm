import React from 'react';

export interface LanGearComplexProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGearComplex(props: LanGearComplexProps): React.ReactElement;
export default LanGearComplex;
