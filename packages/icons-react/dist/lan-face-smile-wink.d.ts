import React from 'react';

export interface LanFaceSmileWinkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSmileWink: React.FC<LanFaceSmileWinkProps>;
export default LanFaceSmileWink;
