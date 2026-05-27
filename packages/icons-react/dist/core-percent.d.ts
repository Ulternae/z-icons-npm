import React from 'react';

export interface CorePercentProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePercent: React.FC<CorePercentProps>;
export default CorePercent;
