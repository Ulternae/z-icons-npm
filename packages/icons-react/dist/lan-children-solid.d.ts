import React from 'react';

export interface LanChildrenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChildrenSolid: React.FC<LanChildrenSolidProps>;
export default LanChildrenSolid;
