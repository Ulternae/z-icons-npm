import React from 'react';

export interface MinaLocationSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLocationSlash(props: MinaLocationSlashProps): React.ReactElement;
export default MinaLocationSlash;
