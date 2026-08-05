import React from 'react';

export interface LanSquareBinaryProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareBinary(props: LanSquareBinaryProps): React.ReactElement;
export default LanSquareBinary;
