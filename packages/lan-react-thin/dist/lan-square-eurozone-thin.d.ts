import React from 'react';

export interface LanSquareEurozoneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareEurozoneThin(props: LanSquareEurozoneThinProps): React.ReactElement;
export default LanSquareEurozoneThin;
