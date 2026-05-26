import React from 'react';

export interface LanFaceUnamusedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceUnamused: React.FC<LanFaceUnamusedProps>;
export default LanFaceUnamused;
