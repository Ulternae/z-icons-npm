import React from 'react';

export interface LanColonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanColon: React.FC<LanColonProps>;
export default LanColon;
