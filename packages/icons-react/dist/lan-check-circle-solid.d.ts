import React from 'react';

export interface LanCheckCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCheckCircleSolid: React.FC<LanCheckCircleSolidProps>;
export default LanCheckCircleSolid;
