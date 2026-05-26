import React from 'react';

export interface LanThumbsUpRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanThumbsUpRegular: React.FC<LanThumbsUpRegularProps>;
export default LanThumbsUpRegular;
