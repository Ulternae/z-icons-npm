import React from 'react';

export interface LanDreidelRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDreidelRegular: React.FC<LanDreidelRegularProps>;
export default LanDreidelRegular;
