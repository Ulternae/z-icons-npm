import React from 'react';

export interface LanSquareQuoteSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareQuoteSolid(props: LanSquareQuoteSolidProps): React.ReactElement;
export default LanSquareQuoteSolid;
