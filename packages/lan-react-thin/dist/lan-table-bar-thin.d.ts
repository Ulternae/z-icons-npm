import React from 'react';

export interface LanTableBarThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableBarThin(props: LanTableBarThinProps): React.ReactElement;
export default LanTableBarThin;
