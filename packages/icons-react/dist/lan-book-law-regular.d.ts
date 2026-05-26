import React from 'react';

export interface LanBookLawRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookLawRegular: React.FC<LanBookLawRegularProps>;
export default LanBookLawRegular;
