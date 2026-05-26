import React from 'react';

export interface LanRabbitProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRabbit: React.FC<LanRabbitProps>;
export default LanRabbit;
