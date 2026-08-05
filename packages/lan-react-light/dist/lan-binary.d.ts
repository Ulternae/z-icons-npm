import React from 'react';

export interface LanBinaryProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBinary(props: LanBinaryProps): React.ReactElement;
export default LanBinary;
