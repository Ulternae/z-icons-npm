import React from 'react';

export interface LanFillRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFillRegular: React.FC<LanFillRegularProps>;
export default LanFillRegular;
