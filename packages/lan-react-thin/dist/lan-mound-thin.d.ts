import React from 'react';

export interface LanMoundThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMoundThin(props: LanMoundThinProps): React.ReactElement;
export default LanMoundThin;
