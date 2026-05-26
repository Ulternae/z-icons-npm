import React from 'react';

export interface LanHandScissorsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandScissorsRegular: React.FC<LanHandScissorsRegularProps>;
export default LanHandScissorsRegular;
