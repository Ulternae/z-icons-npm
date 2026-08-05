import React from 'react';

export interface LanCodeCompareThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCodeCompareThin(props: LanCodeCompareThinProps): React.ReactElement;
export default LanCodeCompareThin;
