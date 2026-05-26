import React from 'react';

export interface LanRectangleSdProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleSd: React.FC<LanRectangleSdProps>;
export default LanRectangleSd;
