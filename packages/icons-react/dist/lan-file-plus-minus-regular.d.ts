import React from 'react';

export interface LanFilePlusMinusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilePlusMinusRegular: React.FC<LanFilePlusMinusRegularProps>;
export default LanFilePlusMinusRegular;
