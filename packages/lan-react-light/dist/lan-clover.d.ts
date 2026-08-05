import React from 'react';

export interface LanCloverProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClover(props: LanCloverProps): React.ReactElement;
export default LanClover;
