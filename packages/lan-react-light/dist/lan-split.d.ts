import React from 'react';

export interface LanSplitProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSplit(props: LanSplitProps): React.ReactElement;
export default LanSplit;
