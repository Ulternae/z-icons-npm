import React from 'react';

export interface LanThListRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanThListRegular: React.FC<LanThListRegularProps>;
export default LanThListRegular;
