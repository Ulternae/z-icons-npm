import React from 'react';

export interface LanTricycleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTricycleThin: React.FC<LanTricycleThinProps>;
export default LanTricycleThin;
