import React from 'react';

export interface MinaColumnsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaColumnsSolid: React.FC<MinaColumnsSolidProps>;
export default MinaColumnsSolid;
