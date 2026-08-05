import React from 'react';

export interface LanImageThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImageThin(props: LanImageThinProps): React.ReactElement;
export default LanImageThin;
