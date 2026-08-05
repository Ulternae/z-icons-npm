import React from 'react';

export interface LanFaceExpressionlessRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceExpressionlessRegular(props: LanFaceExpressionlessRegularProps): React.ReactElement;
export default LanFaceExpressionlessRegular;
