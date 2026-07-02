import React from 'react';

export interface CoreCloudSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCloudSlash(props: CoreCloudSlashProps): React.ReactElement;
export default CoreCloudSlash;
