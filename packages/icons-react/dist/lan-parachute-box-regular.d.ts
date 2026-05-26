import React from 'react';

export interface LanParachuteBoxRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanParachuteBoxRegular: React.FC<LanParachuteBoxRegularProps>;
export default LanParachuteBoxRegular;
