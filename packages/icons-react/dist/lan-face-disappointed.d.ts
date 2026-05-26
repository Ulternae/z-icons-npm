import React from 'react';

export interface LanFaceDisappointedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceDisappointed: React.FC<LanFaceDisappointedProps>;
export default LanFaceDisappointed;
