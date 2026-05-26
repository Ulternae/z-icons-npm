import React from 'react';

export interface LanTableBarRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableBarRegular: React.FC<LanTableBarRegularProps>;
export default LanTableBarRegular;
