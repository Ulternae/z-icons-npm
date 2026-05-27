import React from 'react';

export interface CoreCameraSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCameraSlash: React.FC<CoreCameraSlashProps>;
export default CoreCameraSlash;
