import React from 'react';

export interface LanScrollOldProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScrollOld: React.FC<LanScrollOldProps>;
export default LanScrollOld;
