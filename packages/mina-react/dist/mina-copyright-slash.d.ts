import React from 'react';

export interface MinaCopyrightSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCopyrightSlash(props: MinaCopyrightSlashProps): React.ReactElement;
export default MinaCopyrightSlash;
