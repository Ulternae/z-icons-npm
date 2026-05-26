import React from 'react';

export interface LanChemexRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChemexRegular: React.FC<LanChemexRegularProps>;
export default LanChemexRegular;
