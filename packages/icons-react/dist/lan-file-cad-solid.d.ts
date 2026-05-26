import React from 'react';

export interface LanFileCadSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileCadSolid: React.FC<LanFileCadSolidProps>;
export default LanFileCadSolid;
