import React from 'react';

export interface LanDistributeSpacingHorizontalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDistributeSpacingHorizontal: React.FC<LanDistributeSpacingHorizontalProps>;
export default LanDistributeSpacingHorizontal;
