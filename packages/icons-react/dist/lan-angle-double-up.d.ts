import React from 'react';

export interface LanAngleDoubleUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAngleDoubleUp: React.FC<LanAngleDoubleUpProps>;
export default LanAngleDoubleUp;
