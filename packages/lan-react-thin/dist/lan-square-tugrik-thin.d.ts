import React from 'react';

export interface LanSquareTugrikThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareTugrikThin(props: LanSquareTugrikThinProps): React.ReactElement;
export default LanSquareTugrikThin;
