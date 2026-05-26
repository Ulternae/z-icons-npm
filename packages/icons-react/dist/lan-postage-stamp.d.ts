import React from 'react';

export interface LanPostageStampProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPostageStamp: React.FC<LanPostageStampProps>;
export default LanPostageStamp;
