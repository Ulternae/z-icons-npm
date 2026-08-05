import React from 'react';

export interface LanCandyCaneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCandyCaneThin(props: LanCandyCaneThinProps): React.ReactElement;
export default LanCandyCaneThin;
