import React from 'react';

export interface LanFeatherProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFeather: React.FC<LanFeatherProps>;
export default LanFeather;
