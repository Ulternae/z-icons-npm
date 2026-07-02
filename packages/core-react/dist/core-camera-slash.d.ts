import React from 'react';

export interface CoreCameraSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCameraSlash(props: CoreCameraSlashProps): React.ReactElement;
export default CoreCameraSlash;
