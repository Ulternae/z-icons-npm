import React from 'react';

export interface LanFileHtmlRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileHtmlRegular: React.FC<LanFileHtmlRegularProps>;
export default LanFileHtmlRegular;
