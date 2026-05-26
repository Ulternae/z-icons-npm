import React from 'react';

export interface LanObjectsColumnThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanObjectsColumnThin: React.FC<LanObjectsColumnThinProps>;
export default LanObjectsColumnThin;
