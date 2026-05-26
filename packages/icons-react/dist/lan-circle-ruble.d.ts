import React from 'react';

export interface LanCircleRubleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleRuble: React.FC<LanCircleRubleProps>;
export default LanCircleRuble;
