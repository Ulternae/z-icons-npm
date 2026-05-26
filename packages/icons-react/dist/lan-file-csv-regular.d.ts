import React from 'react';

export interface LanFileCsvRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileCsvRegular: React.FC<LanFileCsvRegularProps>;
export default LanFileCsvRegular;
