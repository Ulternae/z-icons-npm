import React from 'react';

export interface LanBlockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBlock: React.FC<LanBlockProps>;
export default LanBlock;
