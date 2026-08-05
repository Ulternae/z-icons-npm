import React from 'react';

export interface NeoVideoSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoVideoSlashSolid(props: NeoVideoSlashSolidProps): React.ReactElement;
export default NeoVideoSlashSolid;
