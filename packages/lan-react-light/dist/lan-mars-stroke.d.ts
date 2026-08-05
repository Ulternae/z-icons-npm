import React from 'react';

export interface LanMarsStrokeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMarsStroke(props: LanMarsStrokeProps): React.ReactElement;
export default LanMarsStroke;
