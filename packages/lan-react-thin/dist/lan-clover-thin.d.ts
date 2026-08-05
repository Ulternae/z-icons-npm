import React from 'react';

export interface LanCloverThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloverThin(props: LanCloverThinProps): React.ReactElement;
export default LanCloverThin;
