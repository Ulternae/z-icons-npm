import React from 'react';

export interface LanUmbrellaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUmbrellaThin: React.FC<LanUmbrellaThinProps>;
export default LanUmbrellaThin;
