import React from 'react';

export interface LanForkliftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanForklift: React.FC<LanForkliftProps>;
export default LanForklift;
