import React from 'react';

export interface LanSquareLariThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareLariThin: React.FC<LanSquareLariThinProps>;
export default LanSquareLariThin;
