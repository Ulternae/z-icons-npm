import React from 'react';

export interface LanFileBanSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileBanSolid: React.FC<LanFileBanSolidProps>;
export default LanFileBanSolid;
