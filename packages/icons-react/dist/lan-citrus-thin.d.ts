import React from 'react';

export interface LanCitrusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCitrusThin: React.FC<LanCitrusThinProps>;
export default LanCitrusThin;
