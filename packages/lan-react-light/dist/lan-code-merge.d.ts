import React from 'react';

export interface LanCodeMergeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCodeMerge(props: LanCodeMergeProps): React.ReactElement;
export default LanCodeMerge;
