import React from 'react';

export interface LanMergeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMergeRegular: React.FC<LanMergeRegularProps>;
export default LanMergeRegular;
