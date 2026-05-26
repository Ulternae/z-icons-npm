import React from 'react';

export interface LanWrenchSimpleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWrenchSimpleRegular: React.FC<LanWrenchSimpleRegularProps>;
export default LanWrenchSimpleRegular;
