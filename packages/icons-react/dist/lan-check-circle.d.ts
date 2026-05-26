import React from 'react';

export interface LanCheckCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCheckCircle: React.FC<LanCheckCircleProps>;
export default LanCheckCircle;
