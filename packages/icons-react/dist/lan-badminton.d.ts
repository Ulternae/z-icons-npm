import React from 'react';

export interface LanBadmintonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBadminton: React.FC<LanBadmintonProps>;
export default LanBadminton;
