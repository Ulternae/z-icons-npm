import React from 'react';

export interface LanVideoDownToLineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVideoDownToLineThin: React.FC<LanVideoDownToLineThinProps>;
export default LanVideoDownToLineThin;
