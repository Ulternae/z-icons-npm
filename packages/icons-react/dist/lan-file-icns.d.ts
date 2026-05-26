import React from 'react';

export interface LanFileIcnsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileIcns: React.FC<LanFileIcnsProps>;
export default LanFileIcns;
