import React from 'react';

export interface LanFilePowerpointSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilePowerpointSolid: React.FC<LanFilePowerpointSolidProps>;
export default LanFilePowerpointSolid;
