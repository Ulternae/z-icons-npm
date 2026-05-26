import React from 'react';

export interface LanKhandaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKhandaThin: React.FC<LanKhandaThinProps>;
export default LanKhandaThin;
