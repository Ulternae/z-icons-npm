import React from 'react';

export interface MinaBuildingOneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBuildingOneSolid: React.FC<MinaBuildingOneSolidProps>;
export default MinaBuildingOneSolid;
