import React from 'react';

export interface LanShoePrintsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShoePrintsSolid: React.FC<LanShoePrintsSolidProps>;
export default LanShoePrintsSolid;
