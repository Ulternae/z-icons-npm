import React from 'react';

export interface LanCartXmarkThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCartXmarkThin: React.FC<LanCartXmarkThinProps>;
export default LanCartXmarkThin;
