import React from 'react';

export interface NeoCameraSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCameraSlash(props: NeoCameraSlashProps): React.ReactElement;
export default NeoCameraSlash;
