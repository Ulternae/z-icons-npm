import React from 'react';

export interface LanHelicopterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHelicopterThin: React.FC<LanHelicopterThinProps>;
export default LanHelicopterThin;
