import React from 'react';

export interface LanButterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanButterRegular: React.FC<LanButterRegularProps>;
export default LanButterRegular;
