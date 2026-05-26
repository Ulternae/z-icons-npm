import React from 'react';

export interface LanClarinetProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClarinet: React.FC<LanClarinetProps>;
export default LanClarinet;
