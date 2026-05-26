import React from 'react';

export interface LanDistributeSpacingVerticalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDistributeSpacingVertical: React.FC<LanDistributeSpacingVerticalProps>;
export default LanDistributeSpacingVertical;
