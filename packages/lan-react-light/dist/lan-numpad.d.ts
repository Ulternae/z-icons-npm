import React from 'react';

export interface LanNumpadProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNumpad(props: LanNumpadProps): React.ReactElement;
export default LanNumpad;
