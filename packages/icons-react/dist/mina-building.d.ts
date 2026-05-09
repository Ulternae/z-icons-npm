import React from 'react';

export interface MinaBuildingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBuilding: React.FC<MinaBuildingProps>;
export default MinaBuilding;
