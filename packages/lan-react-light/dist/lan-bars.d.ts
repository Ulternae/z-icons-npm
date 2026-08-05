import React from 'react';

export interface LanBarsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBars(props: LanBarsProps): React.ReactElement;
export default LanBars;
