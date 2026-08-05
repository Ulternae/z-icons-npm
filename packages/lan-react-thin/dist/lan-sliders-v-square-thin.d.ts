import React from 'react';

export interface LanSlidersVSquareThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSlidersVSquareThin(props: LanSlidersVSquareThinProps): React.ReactElement;
export default LanSlidersVSquareThin;
