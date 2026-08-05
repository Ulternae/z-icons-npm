import React from 'react';

export interface LanCameraPolaroidSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraPolaroidSolid(props: LanCameraPolaroidSolidProps): React.ReactElement;
export default LanCameraPolaroidSolid;
