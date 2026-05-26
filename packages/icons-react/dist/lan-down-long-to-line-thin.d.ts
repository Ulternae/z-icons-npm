import React from 'react';

export interface LanDownLongToLineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDownLongToLineThin: React.FC<LanDownLongToLineThinProps>;
export default LanDownLongToLineThin;
