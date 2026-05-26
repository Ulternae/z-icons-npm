import React from 'react';

export interface LanFaceSmilePlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSmilePlusRegular: React.FC<LanFaceSmilePlusRegularProps>;
export default LanFaceSmilePlusRegular;
