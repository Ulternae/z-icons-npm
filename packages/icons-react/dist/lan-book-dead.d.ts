import React from 'react';

export interface LanBookDeadProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookDead: React.FC<LanBookDeadProps>;
export default LanBookDead;
