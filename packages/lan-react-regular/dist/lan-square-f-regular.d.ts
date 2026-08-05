import React from 'react';

export interface LanSquareFRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareFRegular(props: LanSquareFRegularProps): React.ReactElement;
export default LanSquareFRegular;
