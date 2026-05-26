import React from 'react';

export interface LanTableDiningSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableDiningSolid: React.FC<LanTableDiningSolidProps>;
export default LanTableDiningSolid;
