import React from 'react';

export interface LanRotateReverseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRotateReverse(props: LanRotateReverseProps): React.ReactElement;
export default LanRotateReverse;
