import React from 'react';

export interface LanThumbsDownRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanThumbsDownRegular: React.FC<LanThumbsDownRegularProps>;
export default LanThumbsDownRegular;
