import React from 'react';

export interface LanGolfFlagHoleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGolfFlagHole: React.FC<LanGolfFlagHoleProps>;
export default LanGolfFlagHole;
