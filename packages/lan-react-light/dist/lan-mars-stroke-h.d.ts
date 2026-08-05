import React from 'react';

export interface LanMarsStrokeHProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMarsStrokeH(props: LanMarsStrokeHProps): React.ReactElement;
export default LanMarsStrokeH;
