import React from 'react';

export interface LanLinkSimpleSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLinkSimpleSlash(props: LanLinkSimpleSlashProps): React.ReactElement;
export default LanLinkSimpleSlash;
