import React from 'react';

export interface LanStarOfDavidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStarOfDavid: React.FC<LanStarOfDavidProps>;
export default LanStarOfDavid;
