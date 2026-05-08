import React from 'react';

export interface MinaTagPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTagPlusSolid: React.FC<MinaTagPlusSolidProps>;
export default MinaTagPlusSolid;
