import React from 'react';

export interface LanCameraPolaroidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraPolaroid: React.FC<LanCameraPolaroidProps>;
export default LanCameraPolaroid;
