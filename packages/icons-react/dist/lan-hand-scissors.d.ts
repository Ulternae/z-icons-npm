import React from 'react';

export interface LanHandScissorsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandScissors: React.FC<LanHandScissorsProps>;
export default LanHandScissors;
