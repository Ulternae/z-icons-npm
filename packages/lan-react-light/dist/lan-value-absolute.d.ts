import React from 'react';

export interface LanValueAbsoluteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanValueAbsolute(props: LanValueAbsoluteProps): React.ReactElement;
export default LanValueAbsolute;
