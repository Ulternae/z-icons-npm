import React from 'react';

export interface LanWindowMinimizeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWindowMinimize: React.FC<LanWindowMinimizeProps>;
export default LanWindowMinimize;
