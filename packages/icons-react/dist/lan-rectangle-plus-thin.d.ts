import React from 'react';

export interface LanRectanglePlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectanglePlusThin: React.FC<LanRectanglePlusThinProps>;
export default LanRectanglePlusThin;
