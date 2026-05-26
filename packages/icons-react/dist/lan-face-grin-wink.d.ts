import React from 'react';

export interface LanFaceGrinWinkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceGrinWink: React.FC<LanFaceGrinWinkProps>;
export default LanFaceGrinWink;
