import React from 'react';

export interface LanBeeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBeeThin: React.FC<LanBeeThinProps>;
export default LanBeeThin;
