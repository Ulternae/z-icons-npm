import React from 'react';

export interface LanEjectProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEject: React.FC<LanEjectProps>;
export default LanEject;
