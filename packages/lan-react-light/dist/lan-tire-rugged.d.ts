import React from 'react';

export interface LanTireRuggedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTireRugged(props: LanTireRuggedProps): React.ReactElement;
export default LanTireRugged;
