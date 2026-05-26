import React from 'react';

export interface LanBusSideThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBusSideThin: React.FC<LanBusSideThinProps>;
export default LanBusSideThin;
