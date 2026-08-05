import React from 'react';

export interface LanFileCodeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileCode(props: LanFileCodeProps): React.ReactElement;
export default LanFileCode;
