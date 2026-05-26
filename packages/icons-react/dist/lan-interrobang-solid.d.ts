import React from 'react';

export interface LanInterrobangSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanInterrobangSolid: React.FC<LanInterrobangSolidProps>;
export default LanInterrobangSolid;
