import React from 'react';

export interface LanFaceSmirkingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSmirking: React.FC<LanFaceSmirkingProps>;
export default LanFaceSmirking;
