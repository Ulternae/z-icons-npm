import React from 'react';

export interface LanAnkhProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAnkh: React.FC<LanAnkhProps>;
export default LanAnkh;
