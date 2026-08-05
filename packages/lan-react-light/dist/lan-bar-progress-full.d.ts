import React from 'react';

export interface LanBarProgressFullProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarProgressFull(props: LanBarProgressFullProps): React.ReactElement;
export default LanBarProgressFull;
