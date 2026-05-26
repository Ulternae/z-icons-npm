import React from 'react';

export interface LanRabbitFastSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRabbitFastSolid: React.FC<LanRabbitFastSolidProps>;
export default LanRabbitFastSolid;
