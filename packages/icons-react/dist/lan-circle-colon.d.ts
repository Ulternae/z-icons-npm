import React from 'react';

export interface LanCircleColonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleColon: React.FC<LanCircleColonProps>;
export default LanCircleColon;
