import React from 'react';

export interface LanRabbitRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRabbitRegular: React.FC<LanRabbitRegularProps>;
export default LanRabbitRegular;
