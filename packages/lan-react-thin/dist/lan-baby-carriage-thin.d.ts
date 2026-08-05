import React from 'react';

export interface LanBabyCarriageThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBabyCarriageThin(props: LanBabyCarriageThinProps): React.ReactElement;
export default LanBabyCarriageThin;
