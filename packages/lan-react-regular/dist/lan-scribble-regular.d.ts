import React from 'react';

export interface LanScribbleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScribbleRegular(props: LanScribbleRegularProps): React.ReactElement;
export default LanScribbleRegular;
