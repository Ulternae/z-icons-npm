import React from 'react';

export interface LanPotatoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPotatoThin: React.FC<LanPotatoThinProps>;
export default LanPotatoThin;
