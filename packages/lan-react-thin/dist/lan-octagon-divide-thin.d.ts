import React from 'react';

export interface LanOctagonDivideThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOctagonDivideThin(props: LanOctagonDivideThinProps): React.ReactElement;
export default LanOctagonDivideThin;
