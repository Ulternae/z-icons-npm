import React from 'react';

export interface MinaBuildingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBuilding(props: MinaBuildingProps): React.ReactElement;
export default MinaBuilding;
