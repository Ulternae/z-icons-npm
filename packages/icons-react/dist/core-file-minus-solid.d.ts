import React from 'react';

export interface CoreFileMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFileMinusSolid: React.FC<CoreFileMinusSolidProps>;
export default CoreFileMinusSolid;
