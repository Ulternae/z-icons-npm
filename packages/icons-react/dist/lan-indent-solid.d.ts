import React from 'react';

export interface LanIndentSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanIndentSolid: React.FC<LanIndentSolidProps>;
export default LanIndentSolid;
