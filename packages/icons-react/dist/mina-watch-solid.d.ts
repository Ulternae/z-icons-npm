import React from 'react';

export interface MinaWatchSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaWatchSolid: React.FC<MinaWatchSolidProps>;
export default MinaWatchSolid;
