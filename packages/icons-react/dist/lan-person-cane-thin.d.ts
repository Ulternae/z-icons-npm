import React from 'react';

export interface LanPersonCaneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonCaneThin: React.FC<LanPersonCaneThinProps>;
export default LanPersonCaneThin;
