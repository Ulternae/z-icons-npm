import React from 'react';

export interface LanMarsStrokeVThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMarsStrokeVThin(props: LanMarsStrokeVThinProps): React.ReactElement;
export default LanMarsStrokeVThin;
