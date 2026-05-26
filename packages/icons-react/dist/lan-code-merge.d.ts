import React from 'react';

export interface LanCodeMergeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCodeMerge: React.FC<LanCodeMergeProps>;
export default LanCodeMerge;
