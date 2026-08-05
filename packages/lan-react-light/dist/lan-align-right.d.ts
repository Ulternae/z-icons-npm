import React from 'react';

export interface LanAlignRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlignRight(props: LanAlignRightProps): React.ReactElement;
export default LanAlignRight;
