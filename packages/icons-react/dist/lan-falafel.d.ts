import React from 'react';

export interface LanFalafelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFalafel: React.FC<LanFalafelProps>;
export default LanFalafel;
