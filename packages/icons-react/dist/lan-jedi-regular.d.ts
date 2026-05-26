import React from 'react';

export interface LanJediRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanJediRegular: React.FC<LanJediRegularProps>;
export default LanJediRegular;
