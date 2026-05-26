import React from 'react';

export interface LanTeethProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTeeth: React.FC<LanTeethProps>;
export default LanTeeth;
