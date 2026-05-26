import React from 'react';

export interface LanDrawCircleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDrawCircleThin: React.FC<LanDrawCircleThinProps>;
export default LanDrawCircleThin;
