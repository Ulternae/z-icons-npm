import React from 'react';

export interface LanCloudSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudSlashThin(props: LanCloudSlashThinProps): React.ReactElement;
export default LanCloudSlashThin;
