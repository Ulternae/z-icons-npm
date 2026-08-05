import React from 'react';

export interface LanSaxophoneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSaxophone(props: LanSaxophoneProps): React.ReactElement;
export default LanSaxophone;
