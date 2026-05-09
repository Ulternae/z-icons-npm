import React from 'react';

export interface MinaCheckCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCheckCircleSolid: React.FC<MinaCheckCircleSolidProps>;
export default MinaCheckCircleSolid;
