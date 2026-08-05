import React from 'react';

export interface LanDeleteRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDeleteRight(props: LanDeleteRightProps): React.ReactElement;
export default LanDeleteRight;
