import React from 'react';

export interface MinaCameraSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCameraSlash(props: MinaCameraSlashProps): React.ReactElement;
export default MinaCameraSlash;
