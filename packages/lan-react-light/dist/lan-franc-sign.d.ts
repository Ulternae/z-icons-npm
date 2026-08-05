import React from 'react';

export interface LanFrancSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFrancSign(props: LanFrancSignProps): React.ReactElement;
export default LanFrancSign;
