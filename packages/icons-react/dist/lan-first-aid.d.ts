import React from 'react';

export interface LanFirstAidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFirstAid: React.FC<LanFirstAidProps>;
export default LanFirstAid;
