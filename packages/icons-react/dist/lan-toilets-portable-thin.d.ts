import React from 'react';

export interface LanToiletsPortableThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanToiletsPortableThin: React.FC<LanToiletsPortableThinProps>;
export default LanToiletsPortableThin;
