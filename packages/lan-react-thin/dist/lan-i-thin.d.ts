import React from 'react';

export interface LanIThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanIThin(props: LanIThinProps): React.ReactElement;
export default LanIThin;
