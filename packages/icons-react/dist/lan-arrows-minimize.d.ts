import React from 'react';

export interface LanArrowsMinimizeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowsMinimize: React.FC<LanArrowsMinimizeProps>;
export default LanArrowsMinimize;
