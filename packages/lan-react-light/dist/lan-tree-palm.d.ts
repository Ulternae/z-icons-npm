import React from 'react';

export interface LanTreePalmProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTreePalm(props: LanTreePalmProps): React.ReactElement;
export default LanTreePalm;
