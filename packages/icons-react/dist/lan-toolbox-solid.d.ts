import React from 'react';

export interface LanToolboxSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanToolboxSolid: React.FC<LanToolboxSolidProps>;
export default LanToolboxSolid;
