import React from 'react';

export interface LanTreeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTreeThin: React.FC<LanTreeThinProps>;
export default LanTreeThin;
