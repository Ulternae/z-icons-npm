import React from 'react';

export interface LanHashtagThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHashtagThin(props: LanHashtagThinProps): React.ReactElement;
export default LanHashtagThin;
