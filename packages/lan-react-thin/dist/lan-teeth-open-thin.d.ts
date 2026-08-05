import React from 'react';

export interface LanTeethOpenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTeethOpenThin(props: LanTeethOpenThinProps): React.ReactElement;
export default LanTeethOpenThin;
