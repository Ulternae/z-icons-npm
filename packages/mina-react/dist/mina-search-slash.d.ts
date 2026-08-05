import React from 'react';

export interface MinaSearchSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSearchSlash(props: MinaSearchSlashProps): React.ReactElement;
export default MinaSearchSlash;
