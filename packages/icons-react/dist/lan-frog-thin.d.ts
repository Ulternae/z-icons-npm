import React from 'react';

export interface LanFrogThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFrogThin: React.FC<LanFrogThinProps>;
export default LanFrogThin;
