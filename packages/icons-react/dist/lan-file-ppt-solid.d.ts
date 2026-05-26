import React from 'react';

export interface LanFilePptSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilePptSolid: React.FC<LanFilePptSolidProps>;
export default LanFilePptSolid;
