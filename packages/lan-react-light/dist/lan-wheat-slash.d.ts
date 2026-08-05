import React from 'react';

export interface LanWheatSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWheatSlash(props: LanWheatSlashProps): React.ReactElement;
export default LanWheatSlash;
