import React from 'react';

export interface LanChildDressSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChildDressSolid: React.FC<LanChildDressSolidProps>;
export default LanChildDressSolid;
