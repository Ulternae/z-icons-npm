import React from 'react';

export interface LanHryvniaSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHryvniaSign(props: LanHryvniaSignProps): React.ReactElement;
export default LanHryvniaSign;
