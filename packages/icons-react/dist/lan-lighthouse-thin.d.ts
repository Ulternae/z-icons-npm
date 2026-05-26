import React from 'react';

export interface LanLighthouseThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLighthouseThin: React.FC<LanLighthouseThinProps>;
export default LanLighthouseThin;
