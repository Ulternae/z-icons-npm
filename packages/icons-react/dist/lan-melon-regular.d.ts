import React from 'react';

export interface LanMelonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMelonRegular: React.FC<LanMelonRegularProps>;
export default LanMelonRegular;
