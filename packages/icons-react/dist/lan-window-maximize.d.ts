import React from 'react';

export interface LanWindowMaximizeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWindowMaximize: React.FC<LanWindowMaximizeProps>;
export default LanWindowMaximize;
