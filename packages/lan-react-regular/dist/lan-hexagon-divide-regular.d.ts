import React from 'react';

export interface LanHexagonDivideRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHexagonDivideRegular(props: LanHexagonDivideRegularProps): React.ReactElement;
export default LanHexagonDivideRegular;
