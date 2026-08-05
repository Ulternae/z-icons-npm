import React from 'react';

export interface LanFileOdfThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileOdfThin(props: LanFileOdfThinProps): React.ReactElement;
export default LanFileOdfThin;
