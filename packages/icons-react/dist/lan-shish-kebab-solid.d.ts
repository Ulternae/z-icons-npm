import React from 'react';

export interface LanShishKebabSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShishKebabSolid: React.FC<LanShishKebabSolidProps>;
export default LanShishKebabSolid;
