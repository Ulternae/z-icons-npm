import React from 'react';

export interface LanDivideRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDivideRegular(props: LanDivideRegularProps): React.ReactElement;
export default LanDivideRegular;
