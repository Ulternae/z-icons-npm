import React from 'react';

export interface NeoBuildingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoBuilding(props: NeoBuildingProps): React.ReactElement;
export default NeoBuilding;
