import React from 'react';

export interface LanTrashCanCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrashCanCheckSolid: React.FC<LanTrashCanCheckSolidProps>;
export default LanTrashCanCheckSolid;
