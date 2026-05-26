import React from 'react';

export interface LanTromboneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTromboneThin: React.FC<LanTromboneThinProps>;
export default LanTromboneThin;
