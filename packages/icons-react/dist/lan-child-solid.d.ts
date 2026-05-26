import React from 'react';

export interface LanChildSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChildSolid: React.FC<LanChildSolidProps>;
export default LanChildSolid;
