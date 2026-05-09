import React from 'react';

export interface MinaStopCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaStopCircleSolid: React.FC<MinaStopCircleSolidProps>;
export default MinaStopCircleSolid;
