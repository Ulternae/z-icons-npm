import React from 'react';

export interface MinaHeartSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHeartSlash(props: MinaHeartSlashProps): React.ReactElement;
export default MinaHeartSlash;
