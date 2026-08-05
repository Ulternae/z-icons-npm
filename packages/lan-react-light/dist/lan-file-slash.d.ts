import React from 'react';

export interface LanFileSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileSlash(props: LanFileSlashProps): React.ReactElement;
export default LanFileSlash;
