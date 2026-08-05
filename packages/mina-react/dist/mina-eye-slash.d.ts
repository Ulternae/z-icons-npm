import React from 'react';

export interface MinaEyeSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaEyeSlash(props: MinaEyeSlashProps): React.ReactElement;
export default MinaEyeSlash;
