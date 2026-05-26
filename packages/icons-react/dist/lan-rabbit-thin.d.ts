import React from 'react';

export interface LanRabbitThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRabbitThin: React.FC<LanRabbitThinProps>;
export default LanRabbitThin;
