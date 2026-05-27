import React from 'react';

export interface NeoBuildingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBuilding: React.FC<NeoBuildingProps>;
export default NeoBuilding;
