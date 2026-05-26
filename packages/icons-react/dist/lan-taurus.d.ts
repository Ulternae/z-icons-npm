import React from 'react';

export interface LanTaurusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTaurus: React.FC<LanTaurusProps>;
export default LanTaurus;
