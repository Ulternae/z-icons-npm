import React from 'react';

export interface CoreUserMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreUserMinusSolid: React.FC<CoreUserMinusSolidProps>;
export default CoreUserMinusSolid;
