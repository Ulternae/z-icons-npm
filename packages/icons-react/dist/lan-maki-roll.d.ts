import React from 'react';

export interface LanMakiRollProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMakiRoll: React.FC<LanMakiRollProps>;
export default LanMakiRoll;
