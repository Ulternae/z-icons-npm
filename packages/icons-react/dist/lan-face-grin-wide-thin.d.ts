import React from 'react';

export interface LanFaceGrinWideThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceGrinWideThin: React.FC<LanFaceGrinWideThinProps>;
export default LanFaceGrinWideThin;
