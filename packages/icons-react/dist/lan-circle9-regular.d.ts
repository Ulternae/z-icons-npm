import React from 'react';

export interface LanCircle9RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircle9Regular: React.FC<LanCircle9RegularProps>;
export default LanCircle9Regular;
