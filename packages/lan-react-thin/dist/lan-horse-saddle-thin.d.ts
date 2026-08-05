import React from 'react';

export interface LanHorseSaddleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHorseSaddleThin(props: LanHorseSaddleThinProps): React.ReactElement;
export default LanHorseSaddleThin;
