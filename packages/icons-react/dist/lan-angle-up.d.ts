import React from 'react';

export interface LanAngleUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAngleUp: React.FC<LanAngleUpProps>;
export default LanAngleUp;
