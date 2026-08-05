import React from 'react';

export interface LanSquareQuoteThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareQuoteThin(props: LanSquareQuoteThinProps): React.ReactElement;
export default LanSquareQuoteThin;
