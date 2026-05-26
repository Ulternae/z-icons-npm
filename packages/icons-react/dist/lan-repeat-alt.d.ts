import React from 'react';

export interface LanRepeatAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRepeatAlt: React.FC<LanRepeatAltProps>;
export default LanRepeatAlt;
