import React from 'react';

export interface LanCameraCircleEllipsisProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraCircleEllipsis(props: LanCameraCircleEllipsisProps): React.ReactElement;
export default LanCameraCircleEllipsis;
