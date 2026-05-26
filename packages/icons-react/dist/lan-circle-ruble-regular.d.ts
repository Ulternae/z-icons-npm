import React from 'react';

export interface LanCircleRubleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleRubleRegular: React.FC<LanCircleRubleRegularProps>;
export default LanCircleRubleRegular;
