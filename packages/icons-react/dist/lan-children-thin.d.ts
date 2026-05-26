import React from 'react';

export interface LanChildrenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChildrenThin: React.FC<LanChildrenThinProps>;
export default LanChildrenThin;
