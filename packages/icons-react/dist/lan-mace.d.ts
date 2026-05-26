import React from 'react';

export interface LanMaceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMace: React.FC<LanMaceProps>;
export default LanMace;
