import React from 'react';

export interface LanFileCsvSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileCsvSolid: React.FC<LanFileCsvSolidProps>;
export default LanFileCsvSolid;
