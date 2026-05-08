import React from 'react';

export interface MinaPasswordSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPasswordSolid: React.FC<MinaPasswordSolidProps>;
export default MinaPasswordSolid;
