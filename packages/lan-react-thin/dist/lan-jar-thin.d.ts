import React from 'react';

export interface LanJarThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanJarThin(props: LanJarThinProps): React.ReactElement;
export default LanJarThin;
