import React from 'react';

export interface LanTrashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrashSolid: React.FC<LanTrashSolidProps>;
export default LanTrashSolid;
