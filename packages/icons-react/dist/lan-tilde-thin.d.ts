import React from 'react';

export interface LanTildeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTildeThin: React.FC<LanTildeThinProps>;
export default LanTildeThin;
