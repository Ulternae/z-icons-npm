import React from 'react';

export interface LanRectangle4kThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangle4kThin: React.FC<LanRectangle4kThinProps>;
export default LanRectangle4kThin;
