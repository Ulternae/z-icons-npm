import React from 'react';

export interface LanLeafOakThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLeafOakThin(props: LanLeafOakThinProps): React.ReactElement;
export default LanLeafOakThin;
