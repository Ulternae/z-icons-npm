import React from 'react';

export interface LanLinkSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLinkSlashThin(props: LanLinkSlashThinProps): React.ReactElement;
export default LanLinkSlashThin;
