import React from 'react';

export interface LanBullseyeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBullseye: React.FC<LanBullseyeProps>;
export default LanBullseye;
