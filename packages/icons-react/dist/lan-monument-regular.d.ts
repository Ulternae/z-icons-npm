import React from 'react';

export interface LanMonumentRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMonumentRegular: React.FC<LanMonumentRegularProps>;
export default LanMonumentRegular;
