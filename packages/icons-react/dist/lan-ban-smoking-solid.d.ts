import React from 'react';

export interface LanBanSmokingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBanSmokingSolid: React.FC<LanBanSmokingSolidProps>;
export default LanBanSmokingSolid;
