import React from 'react';

export interface LanCircleDongProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleDong: React.FC<LanCircleDongProps>;
export default LanCircleDong;
