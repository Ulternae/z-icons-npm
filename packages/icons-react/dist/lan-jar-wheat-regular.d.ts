import React from 'react';

export interface LanJarWheatRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanJarWheatRegular: React.FC<LanJarWheatRegularProps>;
export default LanJarWheatRegular;
