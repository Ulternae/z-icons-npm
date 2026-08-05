import React from 'react';

export interface MinaBellSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBellSlash(props: MinaBellSlashProps): React.ReactElement;
export default MinaBellSlash;
