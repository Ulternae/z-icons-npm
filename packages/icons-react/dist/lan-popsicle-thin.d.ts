import React from 'react';

export interface LanPopsicleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPopsicleThin: React.FC<LanPopsicleThinProps>;
export default LanPopsicleThin;
