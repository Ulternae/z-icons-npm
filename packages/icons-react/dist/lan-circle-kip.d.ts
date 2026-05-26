import React from 'react';

export interface LanCircleKipProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleKip: React.FC<LanCircleKipProps>;
export default LanCircleKip;
