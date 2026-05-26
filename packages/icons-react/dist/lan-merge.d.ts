import React from 'react';

export interface LanMergeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMerge: React.FC<LanMergeProps>;
export default LanMerge;
