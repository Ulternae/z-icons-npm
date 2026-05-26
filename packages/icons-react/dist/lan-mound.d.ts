import React from 'react';

export interface LanMoundProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMound: React.FC<LanMoundProps>;
export default LanMound;
