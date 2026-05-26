import React from 'react';

export interface LanSpadeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSpade: React.FC<LanSpadeProps>;
export default LanSpade;
