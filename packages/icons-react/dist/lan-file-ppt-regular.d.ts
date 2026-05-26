import React from 'react';

export interface LanFilePptRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilePptRegular: React.FC<LanFilePptRegularProps>;
export default LanFilePptRegular;
