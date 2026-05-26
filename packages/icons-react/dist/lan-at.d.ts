import React from 'react';

export interface LanAtProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAt: React.FC<LanAtProps>;
export default LanAt;
