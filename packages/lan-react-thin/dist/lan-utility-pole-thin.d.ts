import React from 'react';

export interface LanUtilityPoleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUtilityPoleThin(props: LanUtilityPoleThinProps): React.ReactElement;
export default LanUtilityPoleThin;
