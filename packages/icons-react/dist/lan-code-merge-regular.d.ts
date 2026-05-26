import React from 'react';

export interface LanCodeMergeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCodeMergeRegular: React.FC<LanCodeMergeRegularProps>;
export default LanCodeMergeRegular;
