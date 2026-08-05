import React from 'react';

export interface LanCodeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCode(props: LanCodeProps): React.ReactElement;
export default LanCode;
