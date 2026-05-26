import React from 'react';

export interface LanViharaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanViharaThin: React.FC<LanViharaThinProps>;
export default LanViharaThin;
