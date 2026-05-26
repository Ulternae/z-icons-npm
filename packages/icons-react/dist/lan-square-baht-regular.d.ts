import React from 'react';

export interface LanSquareBahtRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareBahtRegular: React.FC<LanSquareBahtRegularProps>;
export default LanSquareBahtRegular;
