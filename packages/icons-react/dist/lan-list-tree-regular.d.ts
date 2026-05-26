import React from 'react';

export interface LanListTreeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanListTreeRegular: React.FC<LanListTreeRegularProps>;
export default LanListTreeRegular;
