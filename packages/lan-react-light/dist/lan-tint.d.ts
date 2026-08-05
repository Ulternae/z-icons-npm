import React from 'react';

export interface LanTintProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTint(props: LanTintProps): React.ReactElement;
export default LanTint;
