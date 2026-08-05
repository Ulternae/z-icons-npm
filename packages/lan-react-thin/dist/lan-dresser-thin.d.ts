import React from 'react';

export interface LanDresserThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDresserThin(props: LanDresserThinProps): React.ReactElement;
export default LanDresserThin;
