import React from 'react';

export interface LanTrashCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrashCheckSolid: React.FC<LanTrashCheckSolidProps>;
export default LanTrashCheckSolid;
