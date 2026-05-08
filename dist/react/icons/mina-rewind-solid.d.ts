import React from 'react';

export interface MinaRewindSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRewindSolid: React.FC<MinaRewindSolidProps>;
export default MinaRewindSolid;
