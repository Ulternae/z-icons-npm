import React from 'react';

export interface LanRectangleTallThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleTallThin: React.FC<LanRectangleTallThinProps>;
export default LanRectangleTallThin;
