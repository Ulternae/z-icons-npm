import React from 'react';

export interface LanBullhornProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBullhorn: React.FC<LanBullhornProps>;
export default LanBullhorn;
