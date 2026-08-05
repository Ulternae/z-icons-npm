import React from 'react';

export interface LanTreePalmThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTreePalmThin(props: LanTreePalmThinProps): React.ReactElement;
export default LanTreePalmThin;
