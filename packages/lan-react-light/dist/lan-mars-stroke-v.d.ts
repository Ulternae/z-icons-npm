import React from 'react';

export interface LanMarsStrokeVProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMarsStrokeV(props: LanMarsStrokeVProps): React.ReactElement;
export default LanMarsStrokeV;
