import React from 'react';

export interface LanBananaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBananaSolid: React.FC<LanBananaSolidProps>;
export default LanBananaSolid;
