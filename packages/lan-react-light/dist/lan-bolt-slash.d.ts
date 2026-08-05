import React from 'react';

export interface LanBoltSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoltSlash(props: LanBoltSlashProps): React.ReactElement;
export default LanBoltSlash;
