import React from 'react';

export interface LanFaceRaisedEyebrowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceRaisedEyebrow: React.FC<LanFaceRaisedEyebrowProps>;
export default LanFaceRaisedEyebrow;
