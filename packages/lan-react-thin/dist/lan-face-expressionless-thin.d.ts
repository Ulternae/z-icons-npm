import React from 'react';

export interface LanFaceExpressionlessThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceExpressionlessThin(props: LanFaceExpressionlessThinProps): React.ReactElement;
export default LanFaceExpressionlessThin;
