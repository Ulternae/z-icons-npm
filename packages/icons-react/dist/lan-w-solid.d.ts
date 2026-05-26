import React from 'react';

export interface LanWSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWSolid: React.FC<LanWSolidProps>;
export default LanWSolid;
