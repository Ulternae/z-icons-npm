import React from 'react';

export interface LanHomeBlankRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHomeBlankRegular: React.FC<LanHomeBlankRegularProps>;
export default LanHomeBlankRegular;
