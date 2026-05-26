import React from 'react';

export interface LanBringFrontProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBringFront: React.FC<LanBringFrontProps>;
export default LanBringFront;
