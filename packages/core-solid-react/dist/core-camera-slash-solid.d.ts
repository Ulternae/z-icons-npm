import React from 'react';

export interface CoreCameraSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCameraSlashSolid(props: CoreCameraSlashSolidProps): React.ReactElement;
export default CoreCameraSlashSolid;
