import React from 'react';

export interface LanGopuramSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGopuramSolid: React.FC<LanGopuramSolidProps>;
export default LanGopuramSolid;
