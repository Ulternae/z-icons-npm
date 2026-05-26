import React from 'react';

export interface LanWrenchSimpleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWrenchSimple: React.FC<LanWrenchSimpleProps>;
export default LanWrenchSimple;
