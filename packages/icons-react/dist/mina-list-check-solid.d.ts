import React from 'react';

export interface MinaListCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaListCheckSolid: React.FC<MinaListCheckSolidProps>;
export default MinaListCheckSolid;
