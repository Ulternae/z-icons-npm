import React from 'react';

export interface LanNewspaperRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNewspaperRegular: React.FC<LanNewspaperRegularProps>;
export default LanNewspaperRegular;
