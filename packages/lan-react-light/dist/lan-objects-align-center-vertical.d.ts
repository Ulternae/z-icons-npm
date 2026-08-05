import React from 'react';

export interface LanObjectsAlignCenterVerticalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanObjectsAlignCenterVertical(props: LanObjectsAlignCenterVerticalProps): React.ReactElement;
export default LanObjectsAlignCenterVertical;
