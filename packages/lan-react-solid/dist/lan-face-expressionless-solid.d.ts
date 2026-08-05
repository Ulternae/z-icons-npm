import React from 'react';

export interface LanFaceExpressionlessSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceExpressionlessSolid(props: LanFaceExpressionlessSolidProps): React.ReactElement;
export default LanFaceExpressionlessSolid;
