import React from 'react';

export interface LanHydraThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHydraThin(props: LanHydraThinProps): React.ReactElement;
export default LanHydraThin;
