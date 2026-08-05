import React from 'react';

export interface LanObjectsAlignRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanObjectsAlignRight(props: LanObjectsAlignRightProps): React.ReactElement;
export default LanObjectsAlignRight;
