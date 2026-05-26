import React from 'react';

export interface LanHotTubPersonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHotTubPerson: React.FC<LanHotTubPersonProps>;
export default LanHotTubPerson;
