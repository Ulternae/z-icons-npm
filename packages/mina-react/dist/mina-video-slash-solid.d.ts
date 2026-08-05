import React from 'react';

export interface MinaVideoSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaVideoSlashSolid(props: MinaVideoSlashSolidProps): React.ReactElement;
export default MinaVideoSlashSolid;
