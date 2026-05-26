import React from 'react';

export interface LanRabbitFastProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRabbitFast: React.FC<LanRabbitFastProps>;
export default LanRabbitFast;
