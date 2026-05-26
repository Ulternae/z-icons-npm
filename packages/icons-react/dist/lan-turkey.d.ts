import React from 'react';

export interface LanTurkeyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTurkey: React.FC<LanTurkeyProps>;
export default LanTurkey;
