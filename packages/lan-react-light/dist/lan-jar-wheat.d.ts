import React from 'react';

export interface LanJarWheatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanJarWheat(props: LanJarWheatProps): React.ReactElement;
export default LanJarWheat;
