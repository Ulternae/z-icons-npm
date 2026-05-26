import React from 'react';

export interface LanAnkhSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAnkhSolid: React.FC<LanAnkhSolidProps>;
export default LanAnkhSolid;
