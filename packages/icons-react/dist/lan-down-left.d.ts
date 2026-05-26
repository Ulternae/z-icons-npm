import React from 'react';

export interface LanDownLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDownLeft: React.FC<LanDownLeftProps>;
export default LanDownLeft;
