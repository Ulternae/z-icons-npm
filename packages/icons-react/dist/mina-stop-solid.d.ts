import React from 'react';

export interface MinaStopSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaStopSolid: React.FC<MinaStopSolidProps>;
export default MinaStopSolid;
