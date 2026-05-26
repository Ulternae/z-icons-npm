import React from 'react';

export interface LanTelescopeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTelescopeThin: React.FC<LanTelescopeThinProps>;
export default LanTelescopeThin;
