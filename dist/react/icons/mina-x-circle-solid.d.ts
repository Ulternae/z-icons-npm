import React from 'react';

export interface MinaXCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaXCircleSolid: React.FC<MinaXCircleSolidProps>;
export default MinaXCircleSolid;
