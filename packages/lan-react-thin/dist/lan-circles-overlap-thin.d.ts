import React from 'react';

export interface LanCirclesOverlapThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCirclesOverlapThin(props: LanCirclesOverlapThinProps): React.ReactElement;
export default LanCirclesOverlapThin;
