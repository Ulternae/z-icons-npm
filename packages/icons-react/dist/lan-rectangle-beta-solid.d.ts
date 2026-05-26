import React from 'react';

export interface LanRectangleBetaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleBetaSolid: React.FC<LanRectangleBetaSolidProps>;
export default LanRectangleBetaSolid;
