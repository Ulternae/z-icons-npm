import React from 'react';

export interface LanScrollTorahProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScrollTorah: React.FC<LanScrollTorahProps>;
export default LanScrollTorah;
