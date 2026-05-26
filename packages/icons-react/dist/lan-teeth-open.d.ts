import React from 'react';

export interface LanTeethOpenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTeethOpen: React.FC<LanTeethOpenProps>;
export default LanTeethOpen;
