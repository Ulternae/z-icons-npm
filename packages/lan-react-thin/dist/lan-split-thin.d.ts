import React from 'react';

export interface LanSplitThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSplitThin(props: LanSplitThinProps): React.ReactElement;
export default LanSplitThin;
