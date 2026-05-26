import React from 'react';

export interface LanGemProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGem: React.FC<LanGemProps>;
export default LanGem;
