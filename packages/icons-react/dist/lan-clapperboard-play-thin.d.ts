import React from 'react';

export interface LanClapperboardPlayThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClapperboardPlayThin: React.FC<LanClapperboardPlayThinProps>;
export default LanClapperboardPlayThin;
