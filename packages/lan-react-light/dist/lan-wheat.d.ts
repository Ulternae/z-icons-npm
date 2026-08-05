import React from 'react';

export interface LanWheatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWheat(props: LanWheatProps): React.ReactElement;
export default LanWheat;
