import React from 'react';

export interface LanMonumentSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMonumentSolid: React.FC<LanMonumentSolidProps>;
export default LanMonumentSolid;
