import React from 'react';

export interface LanFaceHoldingBackTearsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceHoldingBackTears: React.FC<LanFaceHoldingBackTearsProps>;
export default LanFaceHoldingBackTears;
