import React from 'react';

export interface LanHelicopterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHelicopter: React.FC<LanHelicopterProps>;
export default LanHelicopter;
