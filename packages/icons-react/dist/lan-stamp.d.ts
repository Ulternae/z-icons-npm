import React from 'react';

export interface LanStampProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStamp: React.FC<LanStampProps>;
export default LanStamp;
