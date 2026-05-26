import React from 'react';

export interface LanVolcanoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVolcanoRegular: React.FC<LanVolcanoRegularProps>;
export default LanVolcanoRegular;
