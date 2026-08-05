import React from 'react';

export interface LanBowArcheryProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBowArchery(props: LanBowArcheryProps): React.ReactElement;
export default LanBowArchery;
