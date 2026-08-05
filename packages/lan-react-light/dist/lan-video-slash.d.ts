import React from 'react';

export interface LanVideoSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVideoSlash(props: LanVideoSlashProps): React.ReactElement;
export default LanVideoSlash;
