import React from 'react';

export interface LanBriefsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBriefs: React.FC<LanBriefsProps>;
export default LanBriefs;
