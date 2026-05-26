import React from 'react';

export interface LanMessageCodeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMessageCode: React.FC<LanMessageCodeProps>;
export default LanMessageCode;
