import React from 'react';

export interface LanVideoHandheldSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVideoHandheldSolid: React.FC<LanVideoHandheldSolidProps>;
export default LanVideoHandheldSolid;
