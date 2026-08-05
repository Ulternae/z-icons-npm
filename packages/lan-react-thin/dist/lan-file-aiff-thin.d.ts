import React from 'react';

export interface LanFileAiffThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileAiffThin(props: LanFileAiffThinProps): React.ReactElement;
export default LanFileAiffThin;
