import React from 'react';

export interface MinaBookPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBookPlusSolid: React.FC<MinaBookPlusSolidProps>;
export default MinaBookPlusSolid;
