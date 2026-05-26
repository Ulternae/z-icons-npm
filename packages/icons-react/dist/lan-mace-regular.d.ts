import React from 'react';

export interface LanMaceRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMaceRegular: React.FC<LanMaceRegularProps>;
export default LanMaceRegular;
