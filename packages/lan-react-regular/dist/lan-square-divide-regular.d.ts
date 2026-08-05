import React from 'react';

export interface LanSquareDivideRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareDivideRegular(props: LanSquareDivideRegularProps): React.ReactElement;
export default LanSquareDivideRegular;
