import React from 'react';

export interface LanBowlRiceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBowlRice(props: LanBowlRiceProps): React.ReactElement;
export default LanBowlRice;
