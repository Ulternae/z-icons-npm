import React from 'react';

export interface LanSquareTugrikRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareTugrikRegular(props: LanSquareTugrikRegularProps): React.ReactElement;
export default LanSquareTugrikRegular;
