import React from 'react';

export interface LanTextSizeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTextSizeThin: React.FC<LanTextSizeThinProps>;
export default LanTextSizeThin;
