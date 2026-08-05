import React from 'react';

export interface LanLinkSimpleSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLinkSimpleSlashThin(props: LanLinkSimpleSlashThinProps): React.ReactElement;
export default LanLinkSimpleSlashThin;
