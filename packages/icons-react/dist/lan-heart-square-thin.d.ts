import React from 'react';

export interface LanHeartSquareThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeartSquareThin: React.FC<LanHeartSquareThinProps>;
export default LanHeartSquareThin;
