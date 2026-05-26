import React from 'react';

export interface LanIceSkateThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanIceSkateThin: React.FC<LanIceSkateThinProps>;
export default LanIceSkateThin;
