import React from 'react';

export interface LanFilePlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilePlusSolid: React.FC<LanFilePlusSolidProps>;
export default LanFilePlusSolid;
