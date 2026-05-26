import React from 'react';

export interface LanSickleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSickleThin: React.FC<LanSickleThinProps>;
export default LanSickleThin;
