import React from 'react';

export interface LanCircleTugrikThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleTugrikThin(props: LanCircleTugrikThinProps): React.ReactElement;
export default LanCircleTugrikThin;
