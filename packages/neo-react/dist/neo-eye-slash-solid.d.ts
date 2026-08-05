import React from 'react';

export interface NeoEyeSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoEyeSlashSolid(props: NeoEyeSlashSolidProps): React.ReactElement;
export default NeoEyeSlashSolid;
