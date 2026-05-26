import React from 'react';

export interface LanThListThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanThListThin: React.FC<LanThListThinProps>;
export default LanThListThin;
