import React from 'react';

export interface LanKipSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKipSignSolid: React.FC<LanKipSignSolidProps>;
export default LanKipSignSolid;
