import React from 'react';

export interface LanOptionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOptionRegular: React.FC<LanOptionRegularProps>;
export default LanOptionRegular;
