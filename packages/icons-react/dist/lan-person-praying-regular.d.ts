import React from 'react';

export interface LanPersonPrayingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonPrayingRegular: React.FC<LanPersonPrayingRegularProps>;
export default LanPersonPrayingRegular;
