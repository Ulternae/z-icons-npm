import React from 'react';

export interface LanUfoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUfoRegular: React.FC<LanUfoRegularProps>;
export default LanUfoRegular;
