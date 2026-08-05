import React from 'react';

export interface LanSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSlash(props: LanSlashProps): React.ReactElement;
export default LanSlash;
