import React from 'react';

export interface CoreHeartSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreHeartSlash(props: CoreHeartSlashProps): React.ReactElement;
export default CoreHeartSlash;
