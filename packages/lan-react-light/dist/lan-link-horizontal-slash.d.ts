import React from 'react';

export interface LanLinkHorizontalSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLinkHorizontalSlash(props: LanLinkHorizontalSlashProps): React.ReactElement;
export default LanLinkHorizontalSlash;
