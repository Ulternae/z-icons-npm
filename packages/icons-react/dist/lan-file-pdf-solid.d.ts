import React from 'react';

export interface LanFilePdfSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilePdfSolid: React.FC<LanFilePdfSolidProps>;
export default LanFilePdfSolid;
