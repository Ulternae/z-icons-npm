import React from 'react';

export interface LanCameraPolaroidThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraPolaroidThin: React.FC<LanCameraPolaroidThinProps>;
export default LanCameraPolaroidThin;
