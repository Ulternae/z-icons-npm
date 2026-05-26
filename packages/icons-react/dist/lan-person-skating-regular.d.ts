import React from 'react';

export interface LanPersonSkatingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonSkatingRegular: React.FC<LanPersonSkatingRegularProps>;
export default LanPersonSkatingRegular;
