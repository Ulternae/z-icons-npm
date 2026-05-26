import React from 'react';

export interface LanToolboxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanToolbox: React.FC<LanToolboxProps>;
export default LanToolbox;
