import React from 'react';

export interface LanCircleDivideRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleDivideRegular(props: LanCircleDivideRegularProps): React.ReactElement;
export default LanCircleDivideRegular;
