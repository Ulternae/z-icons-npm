import React from 'react';

export interface LanSquareFrancRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareFrancRegular(props: LanSquareFrancRegularProps): React.ReactElement;
export default LanSquareFrancRegular;
