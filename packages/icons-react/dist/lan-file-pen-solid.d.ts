import React from 'react';

export interface LanFilePenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilePenSolid: React.FC<LanFilePenSolidProps>;
export default LanFilePenSolid;
