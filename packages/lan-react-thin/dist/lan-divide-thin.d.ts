import React from 'react';

export interface LanDivideThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDivideThin(props: LanDivideThinProps): React.ReactElement;
export default LanDivideThin;
