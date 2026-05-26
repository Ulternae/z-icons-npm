import React from 'react';

export interface LanMustacheRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMustacheRegular: React.FC<LanMustacheRegularProps>;
export default LanMustacheRegular;
