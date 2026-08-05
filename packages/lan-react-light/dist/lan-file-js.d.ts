import React from 'react';

export interface LanFileJsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileJs(props: LanFileJsProps): React.ReactElement;
export default LanFileJs;
