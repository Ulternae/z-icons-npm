import React from 'react';

export interface MinaFileMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFileMinusSolid: React.FC<MinaFileMinusSolidProps>;
export default MinaFileMinusSolid;
