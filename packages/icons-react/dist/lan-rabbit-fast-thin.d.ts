import React from 'react';

export interface LanRabbitFastThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRabbitFastThin: React.FC<LanRabbitFastThinProps>;
export default LanRabbitFastThin;
