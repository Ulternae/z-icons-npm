import React from 'react';

export interface CoreCloudSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCloudSlashSolid(props: CoreCloudSlashSolidProps): React.ReactElement;
export default CoreCloudSlashSolid;
