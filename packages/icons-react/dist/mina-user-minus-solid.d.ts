import React from 'react';

export interface MinaUserMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaUserMinusSolid: React.FC<MinaUserMinusSolidProps>;
export default MinaUserMinusSolid;
