import React from 'react';

export interface LanBabyCarriageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBabyCarriage: React.FC<LanBabyCarriageProps>;
export default LanBabyCarriage;
