import React from 'react';

export interface LanFilePdfRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilePdfRegular: React.FC<LanFilePdfRegularProps>;
export default LanFilePdfRegular;
