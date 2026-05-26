import React from 'react';

export interface LanShredderSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShredderSolid: React.FC<LanShredderSolidProps>;
export default LanShredderSolid;
