import React from 'react';

export interface LanBaseballBatRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBaseballBatRegular: React.FC<LanBaseballBatRegularProps>;
export default LanBaseballBatRegular;
