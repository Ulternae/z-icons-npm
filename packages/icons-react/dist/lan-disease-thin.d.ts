import React from 'react';

export interface LanDiseaseThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiseaseThin: React.FC<LanDiseaseThinProps>;
export default LanDiseaseThin;
