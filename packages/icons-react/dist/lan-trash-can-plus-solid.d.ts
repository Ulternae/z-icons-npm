import React from 'react';

export interface LanTrashCanPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrashCanPlusSolid: React.FC<LanTrashCanPlusSolidProps>;
export default LanTrashCanPlusSolid;
