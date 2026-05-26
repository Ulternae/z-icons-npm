import React from 'react';

export interface LanCameraPolaroidRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraPolaroidRegular: React.FC<LanCameraPolaroidRegularProps>;
export default LanCameraPolaroidRegular;
