import React from 'react';

export interface LanRabbitSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRabbitSolid: React.FC<LanRabbitSolidProps>;
export default LanRabbitSolid;
