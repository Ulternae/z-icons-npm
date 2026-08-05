import React from 'react';

export interface LanSquareERegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareERegular(props: LanSquareERegularProps): React.ReactElement;
export default LanSquareERegular;
