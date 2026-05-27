import React from 'react';

export interface CoreCameraSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCameraSlashSolid: React.FC<CoreCameraSlashSolidProps>;
export default CoreCameraSlashSolid;
