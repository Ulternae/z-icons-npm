import React from 'react';

export interface MinaAeroplaneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAeroplaneSolid: React.FC<MinaAeroplaneSolidProps>;
export default MinaAeroplaneSolid;
