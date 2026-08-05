import React from 'react';

export interface LanObjectsAlignBottomProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanObjectsAlignBottom(props: LanObjectsAlignBottomProps): React.ReactElement;
export default LanObjectsAlignBottom;
