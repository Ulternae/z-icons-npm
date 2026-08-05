import React from 'react';

export interface LanLinkSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLinkSlash(props: LanLinkSlashProps): React.ReactElement;
export default LanLinkSlash;
