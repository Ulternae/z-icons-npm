import React from 'react';

export interface LanWrenchRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWrenchRegular: React.FC<LanWrenchRegularProps>;
export default LanWrenchRegular;
