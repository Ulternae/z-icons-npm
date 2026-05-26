import React from 'react';

export interface LanTentsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTents: React.FC<LanTentsProps>;
export default LanTents;
