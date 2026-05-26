import React from 'react';

export interface LanMessageSmsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMessageSmsSolid: React.FC<LanMessageSmsSolidProps>;
export default LanMessageSmsSolid;
