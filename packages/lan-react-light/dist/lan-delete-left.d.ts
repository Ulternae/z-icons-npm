import React from 'react';

export interface LanDeleteLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDeleteLeft(props: LanDeleteLeftProps): React.ReactElement;
export default LanDeleteLeft;
