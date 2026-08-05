import React from 'react';

export interface LanServerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanServerThin(props: LanServerThinProps): React.ReactElement;
export default LanServerThin;
