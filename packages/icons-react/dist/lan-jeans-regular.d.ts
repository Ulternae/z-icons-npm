import React from 'react';

export interface LanJeansRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanJeansRegular: React.FC<LanJeansRegularProps>;
export default LanJeansRegular;
