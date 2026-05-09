import React from 'react';

export interface MinaAnnoyedCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAnnoyedCircleSolid: React.FC<MinaAnnoyedCircleSolidProps>;
export default MinaAnnoyedCircleSolid;
