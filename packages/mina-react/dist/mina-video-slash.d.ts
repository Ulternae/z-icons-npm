import React from 'react';

export interface MinaVideoSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaVideoSlash(props: MinaVideoSlashProps): React.ReactElement;
export default MinaVideoSlash;
