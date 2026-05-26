import React from 'react';

export interface LanChildRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChildRegular: React.FC<LanChildRegularProps>;
export default LanChildRegular;
