import React from 'react';

export interface LanCodeForkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCodeFork: React.FC<LanCodeForkProps>;
export default LanCodeFork;
