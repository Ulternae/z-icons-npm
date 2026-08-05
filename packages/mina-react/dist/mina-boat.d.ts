import React from 'react';

export interface MinaBoatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBoat(props: MinaBoatProps): React.ReactElement;
export default MinaBoat;
