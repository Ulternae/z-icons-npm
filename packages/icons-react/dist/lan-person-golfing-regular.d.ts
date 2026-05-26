import React from 'react';

export interface LanPersonGolfingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonGolfingRegular: React.FC<LanPersonGolfingRegularProps>;
export default LanPersonGolfingRegular;
