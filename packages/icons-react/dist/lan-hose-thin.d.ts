import React from 'react';

export interface LanHoseThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHoseThin: React.FC<LanHoseThinProps>;
export default LanHoseThin;
