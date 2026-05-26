import React from 'react';

export interface LanSushiProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSushi: React.FC<LanSushiProps>;
export default LanSushi;
