import React from 'react';

export interface LanSquidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquid: React.FC<LanSquidProps>;
export default LanSquid;
