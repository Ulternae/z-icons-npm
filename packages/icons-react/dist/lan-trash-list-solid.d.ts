import React from 'react';

export interface LanTrashListSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrashListSolid: React.FC<LanTrashListSolidProps>;
export default LanTrashListSolid;
