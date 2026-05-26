import React from 'react';

export interface LanPotatoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPotatoRegular: React.FC<LanPotatoRegularProps>;
export default LanPotatoRegular;
