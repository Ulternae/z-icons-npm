import React from 'react';

export interface LanFaceExpressionlessProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceExpressionless(props: LanFaceExpressionlessProps): React.ReactElement;
export default LanFaceExpressionless;
