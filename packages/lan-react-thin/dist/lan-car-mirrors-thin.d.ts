import React from 'react';

export interface LanCarMirrorsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarMirrorsThin(props: LanCarMirrorsThinProps): React.ReactElement;
export default LanCarMirrorsThin;
