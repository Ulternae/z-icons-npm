import React from 'react';

export interface LanFaceSmirkingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSmirkingRegular: React.FC<LanFaceSmirkingRegularProps>;
export default LanFaceSmirkingRegular;
