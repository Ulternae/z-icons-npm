import React from 'react';

export interface LanMugProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMug: React.FC<LanMugProps>;
export default LanMug;
