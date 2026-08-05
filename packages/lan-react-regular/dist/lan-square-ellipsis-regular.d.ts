import React from 'react';

export interface LanSquareEllipsisRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareEllipsisRegular(props: LanSquareEllipsisRegularProps): React.ReactElement;
export default LanSquareEllipsisRegular;
