import React from 'react';

export interface LanObjectUngroupSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanObjectUngroupSolid: React.FC<LanObjectUngroupSolidProps>;
export default LanObjectUngroupSolid;
