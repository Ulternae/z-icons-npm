import React from 'react';

export interface MinaLampSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLampSolid: React.FC<MinaLampSolidProps>;
export default MinaLampSolid;
