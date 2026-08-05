import React from 'react';

export interface LanGearComplexCodeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGearComplexCode(props: LanGearComplexCodeProps): React.ReactElement;
export default LanGearComplexCode;
