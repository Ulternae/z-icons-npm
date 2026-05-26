import React from 'react';

export interface LanRepeatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRepeat: React.FC<LanRepeatProps>;
export default LanRepeat;
