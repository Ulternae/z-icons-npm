import React from 'react';

export interface LanFilePngSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilePngSolid: React.FC<LanFilePngSolidProps>;
export default LanFilePngSolid;
