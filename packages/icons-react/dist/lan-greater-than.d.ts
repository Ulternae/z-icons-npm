import React from 'react';

export interface LanGreaterThanProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGreaterThan: React.FC<LanGreaterThanProps>;
export default LanGreaterThan;
