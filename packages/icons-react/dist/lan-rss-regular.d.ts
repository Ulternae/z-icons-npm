import React from 'react';

export interface LanRssRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRssRegular: React.FC<LanRssRegularProps>;
export default LanRssRegular;
