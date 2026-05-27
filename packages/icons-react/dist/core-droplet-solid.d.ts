import React from 'react';

export interface CoreDropletSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreDropletSolid: React.FC<CoreDropletSolidProps>;
export default CoreDropletSolid;
