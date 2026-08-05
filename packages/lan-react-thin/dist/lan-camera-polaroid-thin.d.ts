import React from 'react';

export interface LanCameraPolaroidThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraPolaroidThin(props: LanCameraPolaroidThinProps): React.ReactElement;
export default LanCameraPolaroidThin;
