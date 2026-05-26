import React from 'react';

export interface LanUpLongToLineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUpLongToLineThin: React.FC<LanUpLongToLineThinProps>;
export default LanUpLongToLineThin;
