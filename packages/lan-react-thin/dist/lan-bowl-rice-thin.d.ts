import React from 'react';

export interface LanBowlRiceThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBowlRiceThin(props: LanBowlRiceThinProps): React.ReactElement;
export default LanBowlRiceThin;
