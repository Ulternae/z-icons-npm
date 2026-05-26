import React from 'react';

export interface LanSquareDivideRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareDivideRegular: React.FC<LanSquareDivideRegularProps>;
export default LanSquareDivideRegular;
