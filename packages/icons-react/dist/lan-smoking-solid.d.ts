import React from 'react';

export interface LanSmokingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSmokingSolid: React.FC<LanSmokingSolidProps>;
export default LanSmokingSolid;
