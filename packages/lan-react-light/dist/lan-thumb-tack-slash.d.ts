import React from 'react';

export interface LanThumbTackSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanThumbTackSlash(props: LanThumbTackSlashProps): React.ReactElement;
export default LanThumbTackSlash;
