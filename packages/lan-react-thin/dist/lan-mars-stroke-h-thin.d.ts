import React from 'react';

export interface LanMarsStrokeHThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMarsStrokeHThin(props: LanMarsStrokeHThinProps): React.ReactElement;
export default LanMarsStrokeHThin;
