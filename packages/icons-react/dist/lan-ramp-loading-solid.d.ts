import React from 'react';

export interface LanRampLoadingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRampLoadingSolid: React.FC<LanRampLoadingSolidProps>;
export default LanRampLoadingSolid;
