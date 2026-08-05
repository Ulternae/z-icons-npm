import React from 'react';

export interface LanCloudSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudSlash(props: LanCloudSlashProps): React.ReactElement;
export default LanCloudSlash;
