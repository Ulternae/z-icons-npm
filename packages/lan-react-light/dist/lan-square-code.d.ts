import React from 'react';

export interface LanSquareCodeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareCode(props: LanSquareCodeProps): React.ReactElement;
export default LanSquareCode;
