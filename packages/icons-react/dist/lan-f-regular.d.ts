import React from 'react';

export interface LanFRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFRegular: React.FC<LanFRegularProps>;
export default LanFRegular;
