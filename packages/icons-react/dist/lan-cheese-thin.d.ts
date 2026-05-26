import React from 'react';

export interface LanCheeseThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCheeseThin: React.FC<LanCheeseThinProps>;
export default LanCheeseThin;
