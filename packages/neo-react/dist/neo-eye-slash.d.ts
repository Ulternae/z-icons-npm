import React from 'react';

export interface NeoEyeSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoEyeSlash(props: NeoEyeSlashProps): React.ReactElement;
export default NeoEyeSlash;
