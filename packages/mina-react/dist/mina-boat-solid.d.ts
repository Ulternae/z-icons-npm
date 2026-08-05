import React from 'react';

export interface MinaBoatSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBoatSolid(props: MinaBoatSolidProps): React.ReactElement;
export default MinaBoatSolid;
