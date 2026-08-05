import React from 'react';

export interface LanMarsStrokeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMarsStrokeRegular(props: LanMarsStrokeRegularProps): React.ReactElement;
export default LanMarsStrokeRegular;
