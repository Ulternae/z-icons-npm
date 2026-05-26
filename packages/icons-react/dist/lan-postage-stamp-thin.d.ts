import React from 'react';

export interface LanPostageStampThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPostageStampThin: React.FC<LanPostageStampThinProps>;
export default LanPostageStampThin;
