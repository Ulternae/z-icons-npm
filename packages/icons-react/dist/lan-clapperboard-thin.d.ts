import React from 'react';

export interface LanClapperboardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClapperboardThin: React.FC<LanClapperboardThinProps>;
export default LanClapperboardThin;
