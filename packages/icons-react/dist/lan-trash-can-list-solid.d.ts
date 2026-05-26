import React from 'react';

export interface LanTrashCanListSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrashCanListSolid: React.FC<LanTrashCanListSolidProps>;
export default LanTrashCanListSolid;
