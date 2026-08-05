import React from 'react';

export interface MinaEarSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaEarSlash(props: MinaEarSlashProps): React.ReactElement;
export default MinaEarSlash;
