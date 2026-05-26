import React from 'react';

export interface LanCommandThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommandThin: React.FC<LanCommandThinProps>;
export default LanCommandThin;
