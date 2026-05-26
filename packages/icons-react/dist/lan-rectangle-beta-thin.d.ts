import React from 'react';

export interface LanRectangleBetaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleBetaThin: React.FC<LanRectangleBetaThinProps>;
export default LanRectangleBetaThin;
