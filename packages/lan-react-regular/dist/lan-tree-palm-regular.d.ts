import React from 'react';

export interface LanTreePalmRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTreePalmRegular(props: LanTreePalmRegularProps): React.ReactElement;
export default LanTreePalmRegular;
