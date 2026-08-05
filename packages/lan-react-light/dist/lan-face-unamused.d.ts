import React from 'react';

export interface LanFaceUnamusedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceUnamused(props: LanFaceUnamusedProps): React.ReactElement;
export default LanFaceUnamused;
