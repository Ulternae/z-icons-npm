import React from 'react';

export interface LanBusinessTimeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBusinessTimeThin: React.FC<LanBusinessTimeThinProps>;
export default LanBusinessTimeThin;
