import React from 'react';

export interface LanCSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCSolid: React.FC<LanCSolidProps>;
export default LanCSolid;
