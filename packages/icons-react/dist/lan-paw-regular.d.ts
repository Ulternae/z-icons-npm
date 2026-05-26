import React from 'react';

export interface LanPawRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPawRegular: React.FC<LanPawRegularProps>;
export default LanPawRegular;
