import React from 'react';

export interface LanCircleTrashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleTrashSolid: React.FC<LanCircleTrashSolidProps>;
export default LanCircleTrashSolid;
