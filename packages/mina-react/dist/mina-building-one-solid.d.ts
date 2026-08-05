import React from 'react';

export interface MinaBuildingOneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBuildingOneSolid(props: MinaBuildingOneSolidProps): React.ReactElement;
export default MinaBuildingOneSolid;
