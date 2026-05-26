import React from 'react';

export interface LanFileJpgProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileJpg: React.FC<LanFileJpgProps>;
export default LanFileJpg;
