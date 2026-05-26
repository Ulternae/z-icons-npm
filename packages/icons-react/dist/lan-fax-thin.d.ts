import React from 'react';

export interface LanFaxThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaxThin: React.FC<LanFaxThinProps>;
export default LanFaxThin;
