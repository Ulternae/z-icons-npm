import React from 'react';

export interface LanCloseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClose(props: LanCloseProps): React.ReactElement;
export default LanClose;
