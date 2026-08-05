import React from 'react';

export interface LanMergeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMergeRegular(props: LanMergeRegularProps): React.ReactElement;
export default LanMergeRegular;
