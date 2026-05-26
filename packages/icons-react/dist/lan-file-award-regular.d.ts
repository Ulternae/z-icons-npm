import React from 'react';

export interface LanFileAwardRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileAwardRegular: React.FC<LanFileAwardRegularProps>;
export default LanFileAwardRegular;
