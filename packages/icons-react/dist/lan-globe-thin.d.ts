import React from 'react';

export interface LanGlobeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlobeThin: React.FC<LanGlobeThinProps>;
export default LanGlobeThin;
