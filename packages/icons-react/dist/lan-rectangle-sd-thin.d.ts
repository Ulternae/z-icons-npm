import React from 'react';

export interface LanRectangleSdThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleSdThin: React.FC<LanRectangleSdThinProps>;
export default LanRectangleSdThin;
