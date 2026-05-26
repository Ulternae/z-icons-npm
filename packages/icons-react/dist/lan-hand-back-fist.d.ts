import React from 'react';

export interface LanHandBackFistProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandBackFist: React.FC<LanHandBackFistProps>;
export default LanHandBackFist;
