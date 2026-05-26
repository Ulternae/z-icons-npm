import React from 'react';

export interface LanIciclesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanIcicles: React.FC<LanIciclesProps>;
export default LanIcicles;
