import React from 'react';

export interface LanMergeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMerge(props: LanMergeProps): React.ReactElement;
export default LanMerge;
