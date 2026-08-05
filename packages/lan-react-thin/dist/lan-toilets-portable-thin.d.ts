import React from 'react';

export interface LanToiletsPortableThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanToiletsPortableThin(props: LanToiletsPortableThinProps): React.ReactElement;
export default LanToiletsPortableThin;
