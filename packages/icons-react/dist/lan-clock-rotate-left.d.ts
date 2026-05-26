import React from 'react';

export interface LanClockRotateLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockRotateLeft: React.FC<LanClockRotateLeftProps>;
export default LanClockRotateLeft;
